<template>
    <div class="flex-col h-screen">
        <header class="mx-auto"> <!-- containerとmx-autoにより中央寄りになる -->
            <div class="m-0 p-10"> <!-- 余白0 -->
                <button class="shadow-lg w-1/10 py-3 px-1 bg-blue-400 text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition ">
                    <router-link to="/">キャンセル</router-link>
                </button>
            </div>
        </header>
        <div class="h-full mx-auto bg-orange-400">
            <div class="m-0">
                <form @submit.prevent="CreateVideo">
                    <div class="pt-10">
                        <p class="font-semibold">シーン名</p>
                        <input
                        type="text"
                        v-model="scene"
                        placeholder="シーン名を入力"
                        class="text-xl w-4/5 p-5 border rounded"
                        />
                    </div>
                    <div class="pt-10">
                        <p class="semibold">シーン概要</p>
                        <textarea
                        v-model="summary"
                        class="text-xl w-4/5 px-3 pb-20 border rounded"
                        placeholder="シーン概要を入力"
                        />
                    </div>

                    <div class="pt-10">
                        <p>投稿する動画を<br>
                            <span class="text-blue-400 font-semibold">撮影</span>もしくは
                            <span class="text-blue-400 font-semibold">アップロード</span>
                        </p>
                        <label for="input-video">{{ isLoading ? '読み込み中...' : '動画を選択'}}</label>
                        <input id="input-video" type="file" accept="video/mp4,video/x-m4v" @change="handleFileSelect">
                        <!-- 基本通りに <input type="file" > でファイルを読み込みます。 その際、 accept="video/mp4"で選択可能なファイル形式を .mp4ムービーに絞っています。-->
                        <!-- @change="handleFileSelect"で、選択しているファイルに変更があったときに実行するメソッドを指定しています。 -->
                        <div class="w-4/5 content-center">
                            <video controls v-if="src" >
                                <source :src="src" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                                <!-- :src="src"により、動画のプレビューが表示されます。 -->
                                <!-- 課題はmovだと再生できないし容量が大きいのでmovをmp4に変換できるとよい（時間があればでよい）動画を真ん中に持っていく -->
                            </video>
                        </div>
                        <!--
                        <div class="thumbnail-list">
                            <transition-group name="fade">
                                <img 
                                class="thumbnail"
                                v-for="(thumbnail, index) in thumbnails" 
                                :key="'thumbnail' + index" 
                                :src="thumbnail"
                                :class="{ active: index === selected }"
                                @click="selected = index"
                                >
                            </transition-group>
                        </div>
                        -->
                    </div>

                    <div class="pt-10">
                        <p>サムネイルを<br>
                            <span class="text-blue-400 font-semibold">撮影</span>もしくは
                            <span class="text-blue-400 font-semibold">アップロード</span>
                        </p>
                        <div>
                            <UploadImage v-model="picture"/>
                        </div>
                    </div>
                    <button type="submit" class="mt-10 text-xl w-2/5 bg-blue-400 text-white py-2 rounded">作成</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import UploadImage from "../components/UploadImage";

export default {
    components: {
        UploadImage,
    },
    data(){
        return {
            //動画を扱う
            scene: "",
            summary: "",
            src: null,
            thumbnails: [],
            selected: 0,
            isLoading: false,

            //写真を扱う
            picture:null,

        }
    },
    methods: {
        handleFileSelect(event) {
            // reset data
            this.src = null
            this.thumbnails = []
            this.selected = 0
            
            // varidate file ファイルのチェック
            const file = event.target.files[0]
            if (!file || !file.type.match('video/*')) return

            // read file ファイルの読み込み
            const reader = new FileReader()
            reader.onload = (evt) => { //たぶん読み込み操作が正常に完了するたびにトリガされる
                this.src = evt.target.result //base64エンコーディングされたdata:URLがthis.srcに入る。よって画面に動画のプレビューが表示される。
                this.createThumbnails(this.src) //サムネイル作成メソッドが実行される。
                this.isLoading = false
            }
            reader.readAsDataURL(file) //ファイルを読み込み、base64化したものを格納する
            this.isLoading = true
        },
        createThumbnails(src) {
            //videoタグを動的に何かする。タグとはdivなどのこと
            const video = document.createElement('video') 
            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')

            // set canvas
            video.onloadeddata = () => {
                canvas.width = video.videoWidth
                canvas.height = video.videoHeight
                video.currentTime = 0
            }
            // capture thumbnail
            video.onseeked = () => {
                if(video.currentTime < video.duration ){
                context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
                this.thumbnails.push(canvas.toDataURL('image/jpeg'))
                video.currentTime += Math.ceil(video.duration / 4)
                } else {
                context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
                this.thumbnails.push(canvas.toDataURL('image/jpeg'))
                }
            }
            
            // videoに動画を読み込ませる
            video.src = src
            video.load()
        },

        onFileChange(e){
            const files = e.target.files || e.dataTransfer.files;
            this.createImage(files[0]);
            this.img_name = files[0].name;
        },
        createImage(file) {
            const reader = new FileReader();
            reader.onload = e => {
                this.uploadedImage = e.target.result;
            };
            reader.readAsDataURL(file);
        },



       
        CreateVideo() {

        }
    },
}
</script>
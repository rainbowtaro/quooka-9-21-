<template>
    <div class="flex flex-col h-screen">
        <!-- divタグにflexのcolumn設定とh-screen(height:100vh)を設定する -->
        <header class="flex justify-between p-4 border-b items-center">
            <!-- Flexboxを利用します。tailwindではclassにflex、justify-betweenを追加することで左右に要素を配置することができます。-->
            <!-- 左右にスペースをとるためpadding、下部にborder、文字列を中央に揃えるためにitems-centerをheaderタグに追加します。-->
            <h1 class="font-semibold text-xl leading-tight">
                <router-link to="/about">Quokka</router-link>
            </h1>

            <button class="py-1 px-4 border-2 border-orange-800 rounded">
                <router-link to="/signin">サインイン</router-link>
            </button>
            <!-- ボタンはborderをグリーンとして、paddingをpx(paddingのx方向)とpy(paddingのy方向)を使ってスペース調整しています。roundedはボタンに丸みをつけるために設定しています。 -->
        </header>
        <div class="bg-orange-400 flex-auto">
            <!-- ユーザ登録部分のdivタグにflex-autoを追加します。-->
            <div class="flex justify-center mt-16">
                <!-- ユーザ登録の文字を画面中央に表示させるためflexのjustify-centerを設定し、ユーザ登録の文字列の大きさと太さをh2タグに設定します。-->
                <div class="w-4/5 border bg-white">
                <!-- ユーザの登録の領域に幅、borderをもたせ背景を白に設定するために以下のclassを設定します。-->
                    <div class="my-12 text-center">
                        <h2 class="text-4xl font-bold">ユーザの登録</h2>
                        <p class="my-4">
                            <span class="font-semibold">メールアドレス</span>と
                            <span class="font-semibold">パスワード</span>を<br>入力してください。
                        </p>

                        <form @submit.prevent="registerUser">
                        <!-- 
                            入力フォームに入力した文字をvue.js側で取得するためにformタグにsubmitイベントを追加しregisterUserメソッドを設定します。submitイベントに設定することでユーザ登録ボタンをクリックするとregisterUserメソッドを実行することができます。
                            @submitイベントにpreventをつけることでsubmitによりページのリロードが行われるデフォルト動作をキャンセルすることができます。つまりsubmitを実行してもページのリロードは行われません。
                        -->
                            <div class="mb-2">
                                <input
                                type="email"
                                v-model="email"
                                placeholder="you@example.com"
                                class="text-xl w-3/5 p-3 border rounded"
                                />
                            </div>
                            <div class="mb-2">
                                <input
                                type="password"
                                v-model="password"
                                class="text-xl w-3/5 p-3 border rounded"
                                placeholder="パスワード"
                                />
                            </div>
                            <button type="submit" class="text-xl w-3/5 bg-blue-400 text-white py-2 rounded">ユーザの登録</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
    data(){
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        registerUser() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(response => {
                    console.log(response);
                    this.$router.push("/");
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }
};
</script>
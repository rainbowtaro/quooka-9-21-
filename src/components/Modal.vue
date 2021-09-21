    
<template>
  <modal name="selectNode" :draggable="true" :resizable="true" :scrollable="true" width="85%" height="40%">
    <div class="modal-header">
      <h2>Video</h2>
      <h2>{{ postId }}</h2>

    </div>
    <div class="modal-body">
      <div class="video">
        <video :src="../../{$postId}.mp4" controls autoplay muted></video>
      </div>
      <Plus/>
      <a href="#" class="btn-square" @click.stop.prevent="hide">BUTTON</a>
    </div>  
  </modal>
</template>

<script>
import Plus from "./icons/Plus";

export default {
  props: ['postId'],
  components:{
    Plus
  },
  data() {
    return {
      videoPath: ''
    }
  },
  methods: {
    hide(){
      this.$emit('hide');
    },
    createPath(){
      return `../assets/video/1.mp4`;
    }
  },
  mounted(){
    this.videoPath = `../assets/video/${this.postId}.mp4`
    console.log(this.videoPath)
  }
}
</script>

<style>
.modal-header, .modal-body {
  padding: 5px 25px;
}
.modal-header {
  border-bottom: 1px solid #ddd;
}

.video{
  position:relative;
  width:100%;
}
.video iframe{
  position:absolute;
  top:0;
  right:0;
  width:100%;
  height:100%;
}



.btn-square {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
.btn-square:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
}

</style>

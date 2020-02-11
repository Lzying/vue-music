<template>
  <div class="play">
    <div class="background-image">
      <div class="flex_center img-b">
        <img :src="img" class="us-keyframes" style="width:180px;height:180px;border-radius:50%; " />
      </div>
      <div>
        <p class="flex_center">
          <span style="font-size:18px;">{{song.name }}-</span>
          <span>{{song.ar[0].name }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Play",
  data() {
    return {
      playSongUrl: 0,
      audio: null,
      img: "",
      song: null
    };
  },
  mounted: function() {
    // `this` 指向 vm 实例
    let id = this.$route.params.id;
    this.playSongUrl = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
    this.getSong(id);
    // this.$refs.audio.autoplay = true;
    // this.$refs.audio.src = this.playSongUrl;

    // 播放
    this.audio = new Audio();
    this.audio.src = this.playSongUrl;
    this.audio.loop = "loop";
    // this.audio.controls = "controls";
    // this.audio.autoplay = true;
    //更改src后需要重新加载音乐
    this.audio.load();
    // // audio.play();
  },
  destroyed: function() {
    // 暂停播放并释放audio
    this.audio.pause();
    this.audio = null;
  },
  methods: {
    getSong(id) {
      axios
        .get(`http://106.12.121.105:3000/song/detail?ids=${id}`)
        .then(data => {
          this.img = data.data.songs[0].al.picUrl;
          this.song = data.data.songs[0];
          // eslint-disable-next-line no-console
          console.log(data.data.songs[0].al.picUrl);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.play {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
.background-image {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  /* background-image: url("https://p2.music.126.net/yZN047VYz7selK4LCsi1Zg==/109951164681443868.jpg"); */
  background-position: 50%;
  opacity: 1;
}
.background-image::before {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.img-b {
  width: 270px;
  height: 270px;
  margin: 50px auto;
  background: url(../../assets/images/coverall.png) -176px -720px no-repeat !important;
  background-size: 470px !important;
  border: 10px solid rgba(197, 197, 197, 0.61);
  border-radius: 50%;
}

@keyframes myfirst {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

.us-keyframes {
  animation: myfirst 30s linear infinite;
  /* transform:rotate(90deg); */
}
</style>

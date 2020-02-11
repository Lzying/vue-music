<template>
  <div class="playlist">
    <div class="playlist-title">
      <img :src="coverImgUrl" style="width:100%;margin-top:-80px" />
      <div class="playlist-title-content">
        <div style="font-size:18px;margin-bottom:10px;">{{playListName}}</div>
        <span
          style="padding:2px 5px;background-color: hsla(0,0%,100%,.2);font-size: 10px;color: hsla(0,0%,100%,.6);"
        >{{updateFrequency}}</span>
        <div style="font-size:14px;margin-top:20px;color: hsla(0,0%,100%,.8);">{{description}}</div>
      </div>
    </div>
    <div
      style="height: 23px;line-height: 23px;padding: 0 10px;font-size: 12px;color: #666;background-color: #eeeff0;"
    >歌曲列表</div>
    <div style="width:100%;margin:0px 0px">
      <div v-for="(item,i) of playList" :key="i">
        <router-link
          tag="div"
          :to="'/play/'+item.id"
          class="flex_between"
          style="width:100%;padding:10px; border-bottom:1px solid beige;"
        >
          <div class="flex_start">
            <div style="width:30px;color:#888">{{i+1}}</div>
            <div>
              <div class="line_clamp_1" style="font-size:17px;">{{item.name}}</div>
              <div
                class="line_clamp_1"
                style="font-size: 12px;color: #888;padding-top:5px"
              >{{item.ar[0].name}} - {{item.al.name}}</div>
            </div>
          </div>
          <div class="flex_center" style="height:100%;">
            <span class="iconfont iconbofang" style="font-size:26px;color: #888;"></span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Playlist",
  data() {
    return {
      list: null,
      playList: null,
      coverImgUrl: "",
      playListName: "",
      updateFrequency: "",
      description: ""
    };
  },
  created: function() {
    let id = this.$route.params.id;
    this.getSong(id);
  },
  methods: {
    getSong(id) {
      axios
        .get(`http://106.12.121.105:3000/playlist/detail?id=${id}`)
        .then(data => {
          // eslint-disable-next-line no-console
          console.log(data);

          this.list = data.data.playlist;
          this.playList = this.list.tracks;
          this.coverImgUrl = this.list.coverImgUrl;
          this.playListName = this.list.name;
          this.updateFrequency = this.list.updateFrequency;
          this.description = this.list.description;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .playlist {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
} */
.playlist-title {
  width: 100%;
  height: 210px;
  overflow: hidden;
  position: relative;
}

.playlist-title-content {
  padding: 40px 20px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 11px;
  top: 0px;
  color: #fff;
  background: rgba(104, 104, 104, 0.541);
}
</style>

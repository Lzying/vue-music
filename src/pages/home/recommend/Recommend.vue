<template>
  <div class="recommend">
    <!-- 推荐歌单 -->
    <div style="width:100%">
      <p style=" border-left:2px solid #d43c33;padding:0px 5px; ">推荐歌单</p>
      <div class="flex_between_wrap_top">
        <div v-for="(item,i) of recomendlist" :key="i" style="width:33%;margin-top:5px">
          <div style="width:100%; position: relative;">
            <img :src="item.picUrl" style="width:100%" />
            <div style="position:absolute;top:6px;right:5px;font-size:12px;color:white">
              <span class="iconfont iconicon-"></span>
              {{item.playCount | capitalize}}
            </div>
          </div>
          <div class="line_clamp_2" style="padding:2px 5px;font-size:13px;color#333;">{{item.name}}</div>
        </div>
      </div>
    </div>

    <!-- 推荐歌单 -->
    <div style="width:100%;margin:30px 0px">
      <p style=" border-left:2px solid #d43c33;padding:0px 5px; ">最新音乐</p>
      <div style="width:100%">
        <div v-for="(item,i) of newSonglist" :key="i" style="width:100%;">
          <router-link
            tag="div"
            :to="'/play/'+item.id"
            class="flex_between"
            style="width:100%;padding:10px; border-bottom:1px solid beige;"
          >
            <div>
              <div class="line_clamp_1" style="font-size:17px;">{{item.name}}</div>
              <div
                class="line_clamp_1"
                style="font-size: 12px;color: #888;padding-top:5px"
              >{{item.song.artists[0].name}} - {{item.song.album.name}}</div>
            </div>
            <div class="flex_center" style="height:100%;">
              <span class="iconfont iconbofang" style="font-size:26px;color: #888;"></span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Recommend",
  data() {
    return {
      recomendlist: [],
      newSonglist: []
    };
  },
  created: function() {
    // `this` 指向 vm 实例
    this.getPersonalizedData();
    this.getPersonalizedNewsongData();
  },
  methods: {
    getPersonalizedData() {
      axios.get("http://106.12.121.105:3000/personalized").then(data => {
        this.recomendlist = data.data.result.slice(0, 6);
        // eslint-disable-next-line no-console
        console.log(this.recomendlist);
      });
    },
    getPersonalizedNewsongData() {
      axios
        .get("http://106.12.121.105:3000/personalized/newsong")
        .then(data => {
          this.newSonglist = data.data.result.slice(0, 10);
          // eslint-disable-next-line no-console
          console.log(this.newSonglist);
        });
    }
  },
  filters: {
    capitalize: function(value) {
      return (value / 10000).toFixed(2) + "万";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line_clamp_1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.line_clamp_2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

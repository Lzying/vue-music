<template>
  <div class="hot">
    <div class="hot-title-box">
      <img src="../../../assets/images/hot_music_bg_2x.jpg" alt style="width:100%" />
      <div style="  position: absolute;top: 0px;width:100%;height:100%;padding:20px;">
        <div class="hot-title-name"></div>
        <p style="font-size:12px;color:white">更新日期：02月06日</p>
      </div>
    </div>
    <div style="width:100%;margin:0px 0px">
      <div
        class="flex_between"
        v-for="(item,i) of hotSonglist"
        :key="i"
        style="width:100%;padding:10px; border-bottom:1px solid beige;"
      >
        <div class="flex_start">
          <div style="width:25px;color:#888" v-bind:class="{'index_red':i<3}">{{i | capitalize}}</div>
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
      </div>
    </div>
    <div class="flex_center" style="margin:20px; color:#888;font-size:13px">
      查看完整榜单 >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Hot",
  data() {
    return {
      hotSonglist: []
    };
  },
  created: function() {
    // `this` 指向 vm 实例
    this.getHotSonglist();
  },
  methods: {
    getHotSonglist() {
      axios.get("http://106.12.121.105:3000/top/list?idx=1").then(data => {
        this.hotSonglist = data.data.playlist.tracks.slice(0, 20);
        // eslint-disable-next-line no-console
        console.log(data);
      });
    }
  },
  filters: {
    capitalize: function(value) {
      let index = value + 1;
      if (+index < 10) {
        return "0" + String(index);
      } else {
        return index;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hot-title-box {
  position: relative;
  width: 100%;
}
.hot-title-name {
  width: 142px;
  height: 67px;
  background: url("../../../assets/images/index_icon_2x.png") no-repeat;
  background-position: -24px -30px;
  background-size: 166px 97px;
}
.index_red {
  color: #d43c33 !important;
}
</style>

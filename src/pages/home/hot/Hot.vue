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
      <div v-for="(item,i) of hotSonglist" :key="i">
        <router-link
          tag="div"
          :to="'/play/'+item.id"
          class="flex_between"
          style="width:100%;padding:10px; border-bottom:1px solid beige;"
        >
          <div class="flex_start">
            <div style="width:30px;color:#888" v-bind:class="{'index_red':i<3}">{{i | capitalize}}</div>
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
    <div class="flex_center" @click="all" style="margin:20px; color:#888;font-size:13px">查看完整榜单 ></div>
  </div>
</template>

<script>
import axiosFunction from "@/common/axios/axios-common";
export default {
  name: "Hot",
  data() {
    return {
      alList: [],
      hotSonglist: []
    };
  },
  created: function() {
    // `this` 指向 vm 实例
    this.getHotSonglist();
  },
  methods: {
    getHotSonglist() {
      axiosFunction.getHotSonglist().then(data => {
        this.alList = data.playlist.tracks;
        this.hotSonglist = this.alList.slice(0, 20);
        // eslint-disable-next-line no-console
        console.log(data);
      }).catch(err => {
            // eslint-disable-next-line no-console
            console.log(err)
        });
    },
    all() {
      this.hotSonglist = this.alList;
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

<template>
  <div class="search">
    <input
      class="search-input"
      type="text"
      v-model="searchValue"
      @blur="inputFunction()"
      placeholder="搜索歌曲"
    />
    <!-- 推荐歌单 -->
    <div style="width:100%;margin:30px 0px">
      <!-- <p style=" border-left:2px solid #d43c33;padding:0px 5px; ">最新音乐</p> -->
      <div style="width:100%">
        <div v-for="(item,i) of searchList" :key="i" style="width:100%;">
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
              >{{item.artists[0].name}} - {{item.album.name}}</div>
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
  name: "Search",
  data() {
    return {
      searchValue: "",
      searchList: []
    };
  },
  methods: {
    getSearchData(value) {
      axios
        .get(`http://106.12.121.105:3000/search?keywords=${value}`)
        .then(data => {
          // eslint-disable-next-line no-console
          console.log(data);
          this.searchList = data.data.result.songs;
        });
    },
    inputFunction() {
      // eslint-disable-next-line no-console
      // console.log(this.searchValue);
      this.getSearchData(this.searchValue);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-input {
  height: 30px;
  width: 90%;
  margin: 10px 5%;
  padding: 0px 20px;
  border-radius: 15px;
  border: none;
  background: rgb(231, 231, 231);
}
.search-input:focus {
  outline: none;
}
.search-input::-webkit-input-placeholder {
  color: #ccc;
}
</style>

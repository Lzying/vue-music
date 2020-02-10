<template>
  <div class="head">
    <div class="header flex_between">
      <div class="title">模仿网易云音乐（仅用与学习）</div>
      <div class="my-bt">下载APP</div>
    </div>
    <div class="head-nav flex_around">
      <router-link tag="div" class="head-router-link" active-class="head-router-link-active" to="/recommend">推荐音乐</router-link>
      <router-link tag="div" class="head-router-link" active-class="head-router-link-active" to="/hot">热歌榜</router-link>
      <router-link tag="div" class="head-router-link" active-class="head-router-link-active" to="/search">搜索</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  /* height: 84px; */
  width: 100%;
}
.header {
  width: 100%;
  height: 84px;
  background-color: #d43c33;
  padding: 0px 10px;
}

.title {
  font-size: 16px;
  color: white;
}

.my-bt {
  font-size: 18px;
  color: #d43c33;
  background: white;
  padding: 0px 20px;
  height: 35px;
  line-height: 35px;
  border-radius: 17px;
  font-size: 16px;
}

.head-nav {
  width: 100%;
  height: 40px;
  font-size: 15px;
  border-bottom:1px solid beige;
  
}

.head-router-link{
  text-decoration:none;
  color: black;
  padding: 8px 10px ;
}
.head-router-link-active{
  color: #d43c33;
  border-bottom:2px solid #d43c33; 
}
/* .head-router-link:hover{
  cursor:pointer;
} */
</style>


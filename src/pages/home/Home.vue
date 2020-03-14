<template>
  <div class="page">
    <!-- <p>sdf</p> -->
    <Head style=" height: 124px;"></Head>
    <router-view style=" height: calc(100% - 124px );overflow:scroll"></router-view>
  </div>
</template>

<script>
import Head from "../../common/components/head/Head";

export default {
  name: "Page",
  components: {
    Head
  },
  data() {
    return {
      aaaaaaa: ""
    };
  },
  created() {
    this.$message.warning("该项目仅用于学习");
    // eslint-disable-next-line no-console
    console.log(this);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
</style>

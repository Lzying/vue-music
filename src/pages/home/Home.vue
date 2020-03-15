<template>
  <div class="page">
    <!-- <p>sdf</p> -->
    <Head style=" height: 124px;"></Head>
    <transition name="slide-fade">
      <router-view style=" height: calc(100% - 124px );overflow:scroll"></router-view>
    </transition>
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

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(1200px);
  opacity: 0;
}
</style>

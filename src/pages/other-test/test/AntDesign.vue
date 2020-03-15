<template>
  <div class="ant-design">
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
    <a-config-provider :autoInsertSpaceInButton="false">
      <a-button type="primary">按钮</a-button>
    </a-config-provider>
    <a-button type="primary">按钮</a-button>
    <a-button type="link">Link</a-button>

    <a-pagination :defaultCurrent="6" :total="500" />
    <div class="sss">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AntDesign",
  data() {
    return {
      playSongUrl: 10
    };
  },
  created(){
    console.log(this);
  },
  mounted: function() {},
  destroyed: function() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mycolor: red;
.sss {
  div {
    height: 30px;
    width: 50px;
    background: $mycolor;
  }
}
</style>

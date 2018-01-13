<template>
  <div id="app">
    <loading v-show="getLoading"></loading>
    <navbar v-show="getNav"></navbar>
    <router-view>展示区</router-view>
    <footbar v-show="getFoot"></footbar>
  </div>
</template>

<script>
//引入
import navbar from "./components/navbar";
import loading from "./components/loading";
import footbar from "./components/footbar";
import { mapGetters } from "vuex";
export default {
  name: "app",
  data() {
    return {
      msg: "vue脚手架"
    };
  },
  mounted() {
    this.routeChange(this.$route); //刷新后，在mounted时，取到路由对象
  },
  methods: {
    routeChange(route) {
      let path = route.path;
      //  console.log(path);
      if (/error/.test(path)) {
        this.$store.dispatch("hideNav");
        this.$store.dispatch("hideFoot");
      } else {
        this.$store.dispatch("showNav");
        this.$store.dispatch("showFoot");
      }
      if (/errormsg/.test(path)) {
        this.$store.dispatch("showNav");
      }
    }
  },
  components: {
    navbar,
    footbar,
    loading //注册
  },
  computed: mapGetters(["getNav", "getFoot", "getLoading"]),
  watch: {
    $route(route) {
      //route==一条路由信息对象  左键(属性)  右函数
      // console.log(route.path)
      this.routeChange(route);
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>

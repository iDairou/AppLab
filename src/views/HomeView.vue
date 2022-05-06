<template>
  <div>
    <the-navbar></the-navbar>
    <home-header></home-header>
    <home-features></home-features>
    <home-choose-app></home-choose-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeHeader from "../components/home/HomeHeader.vue";
import TheNavbar from "../components/TheNavbar.vue";
import HomeFeatures from "../components/home/HomeFeatures.vue";
import HomeChooseApp from "../components/home/HomeChooseApp.vue";

export default Vue.extend({
  name: "HomeView",

  components: {
    HomeHeader,
    TheNavbar,
    HomeFeatures,
    HomeChooseApp,
  },
});
</script>

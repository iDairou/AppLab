<template>
  <div>
    <the-navbar></the-navbar>
    <home-header></home-header>
    <home-features></home-features>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeHeader from "../components/home/HomeHeader.vue";
import TheNavbar from "../components/TheNavbar.vue";
import HomeFeatures from "../components/home/HomeFeatures.vue";

export default Vue.extend({
  name: "HomeView",

  components: {
    HomeHeader,
    TheNavbar,
    HomeFeatures,
  },
});
</script>

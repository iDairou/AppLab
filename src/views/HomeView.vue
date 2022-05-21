<template>
  <div>
    <the-navbar></the-navbar>
    <home-header></home-header>
    <home-features></home-features>
    <home-choose-app></home-choose-app>
    <home-client-satisfaction></home-client-satisfaction>
    <home-questions></home-questions>
    <home-download></home-download>
    <the-footer></the-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeHeader from "../components/home/HomeHeader.vue";
import TheNavbar from "../components/TheNavbar.vue";
import HomeFeatures from "../components/home/HomeFeatures.vue";
import HomeChooseApp from "../components/home/HomeChooseApp.vue";
import HomeClientSatisfaction from "../components/home/HomeClientSatisfaction.vue";
import HomeQuestions from "../components/home/HomeQuestions.vue";
import HomeDownload from "../components/home/HomeDownload.vue";
import TheFooter from "../components/TheFooter.vue";

export default Vue.extend({
  name: "HomeView",

  components: {
    HomeHeader,
    TheNavbar,
    HomeFeatures,
    HomeChooseApp,
    HomeClientSatisfaction,
    HomeQuestions,
    HomeDownload,
    TheFooter,
  },
});
</script>

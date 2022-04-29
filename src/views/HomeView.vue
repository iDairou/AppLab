<template>
  <v-container>
    <home-header></home-header>
    <hello-world />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import HomeHeader from "../components/home/HomeHeader.vue";

export default Vue.extend({
  name: "HomeView",

  components: {
    HelloWorld,
    HomeHeader,
  },
});
</script>

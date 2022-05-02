<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeHeader from "../components/home/HomeHeader.vue";

export default Vue.extend({
  name: "HomeView",

  components: {
    HomeHeader,
  },
});
</script>

<template>
  <div>
    <choose-app-first></choose-app-first>
    <choose-app-second></choose-app-second>
  </div>
</template>
<script>
import ChooseAppFirst from "../chooseApp/ChooseAppFirst.vue";
import ChooseAppSecond from "../chooseApp/ChooseAppSecond.vue";

export default {
  components: {
    ChooseAppFirst,
    ChooseAppSecond,
  },
};
</script>

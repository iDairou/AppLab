<template>
  <div>
    <choose-app-first></choose-app-first>
    <choose-app-second></choose-app-second>
    <choose-app-third></choose-app-third>
  </div>
</template>
<script>
import ChooseAppFirst from "../chooseApp/ChooseAppFirst.vue";
import ChooseAppSecond from "../chooseApp/ChooseAppSecond.vue";
import ChooseAppThird from "../chooseApp/ChooseAppThird.vue";

export default {
  components: {
    ChooseAppFirst,
    ChooseAppSecond,
    ChooseAppThird,
  },
};
</script>

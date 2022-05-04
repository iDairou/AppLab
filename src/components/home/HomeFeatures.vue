<template>
  <div>
    <features-first></features-first>
    <features-second></features-second>
    <features-third></features-third>
  </div>
</template>

<script>
import FeaturesFirst from "../features/FeaturesFirst.vue";
import FeaturesSecond from "../features/FeaturesSecond.vue";
import FeaturesThird from "../features/FeaturesThird.vue";
export default {
  components: {
    FeaturesFirst,
    FeaturesSecond,
    FeaturesThird,
  },
};
</script>

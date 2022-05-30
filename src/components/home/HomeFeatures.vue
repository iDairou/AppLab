<template>
  <div id="features" class="border">
    <features-first></features-first>
    <features-second></features-second>
    <features-third></features-third>
    <features-fourth></features-fourth>
  </div>
</template>

<script>
import FeaturesFirst from "../features/FeaturesFirst.vue";
import FeaturesSecond from "../features/FeaturesSecond.vue";
import FeaturesThird from "../features/FeaturesThird.vue";
import FeaturesFourth from "../features/FeaturesFourth.vue";
export default {
  components: {
    FeaturesFirst,
    FeaturesSecond,
    FeaturesThird,
    FeaturesFourth,
  },
};
</script>

<style scoped>
.border {
  border-bottom: 2px solid #f4f4f4;
}
</style>

<template>
  <button-test @click="togglePrice">Toggle</button-test>
</template>

<script>
import ButtonTest from "../shared/SharedButton.vue";

export default {
  components: {
    ButtonTest,
  },
};
</script>

<template>
  <v-btn
    class="v-btn--round default-btn mr-4 font-weight-bold"
    :class="btnClass"
    :color="bgColor"
    rounded
    ><slot>Try for free</slot></v-btn
  >
</template>
<script>
export default {
  props: {
    btnClass: String,
    bgColor: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/variables";

.v-btn {
  &.default-btn {
    font-size: 16px;
    min-width: 170px;
    height: 57px;
    background: #fff;
    color: $primary;
    text-transform: none;
    letter-spacing: 0px;
    transition: background-color 0.3s;
    margin-top: 18.5px;
    box-shadow: none;
    margin: 0;
  }
}
</style>

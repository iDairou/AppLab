<template>
  <v-btn
    class="v-btn--round default-btn mr-4 font-weight-bold"
    :class="btnClass"
    :color="bgColor"
    @click="emit"
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
  methods: {
    emit() {
      this.$emit("emit");
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins";

.v-btn {
  &.default-btn {
    min-width: 170px;
    height: 57px;
    background: #fff;
    color: $primary;
    transition: background-color 0.3s;
    margin-top: 18.5px;
    box-shadow: none;
    margin: 0;
    @include for-size(tablet-landscape-up) {
      height: 50px;
      min-width: 120px;
    }
    span {
      @include for-size(tablet-landscape-up) {
        font-size: 12px;
      }
      @include for-size(tablet-portrait-up) {
        font-size: 11px;
      }
    }
  }
}
</style>

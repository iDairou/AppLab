<template>
  <div class="box-icon">
    <div class="box-icon--img">
      <img
        src="..\src\assets\images\2_awesome-apps-features\logo_03.png"
        alt="First Icon"
      />
    </div>
    <div class="box-icon-desc">
      <h4 :style="{ color: color }"><slot>Fast Performance</slot></h4>
      <p>
        <slot name="paragraph">
          Get your blood tests delivered at home collect a sample the news your
          blood tests</slot
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/variables";

.box-icon {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h4 {
    margin-bottom: 5px;
  }
  .box-icon--img {
    margin-right: 30px;
    background-color: #ffecef;
    border-radius: 50%;
    padding: 15px 15px 10px 15px;
  }
}
</style>

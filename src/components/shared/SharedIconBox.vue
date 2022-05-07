<template>
  <div class="box-icon" :class="boxClass">
    <div class="box-icon__img">
      <img :src="require(`@/assets/images/${img}`)" :alt="img" />
    </div>
    <div class="box-icon__desc">
      <h4><slot>Fast Performance</slot></h4>
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
    img: String,
    boxClass: String,
  },
};
</script>

<style lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins";

.box-icon {
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  $names: box-icon--green, box-icon--blue;
  $colors: #40975f, #2563ff;

  @for $i from 1 through length($names) {
    &.#{nth($names, $i)} {
      h4 {
        color: nth($colors, $i);
      }

      .box-icon__img {
        background-color: rgba(nth($colors, $i), 0.1);
      }
    }
  }

  $names2: box-icon--light-red, box-icon--light-blue, box-icon--light-yellow,
    box-icon--light-green, box-icon--light-purple, box-icon--light-orange;
  $colors2: #ffecef, #eaf9ff, #fff6d3, #e4ffee, #f4f4ff, #fdeee4;

  @for $i from 1 through length($names2) {
    &.#{nth($names2, $i)} {
      .box-icon__img {
        background-color: nth($colors2, $i);
      }
      h4 {
        color: #242f51;
      }
    }
  }

  h4 {
    margin-bottom: 5px;
    color: #f55767;
    font-size: 20px;
  }

  .box-icon__desc {
    flex: 0 0 calc(100% - 200px);

    p {
      font-size: 13px;
      margin: 0;
    }
  }

  .box-icon__img {
    @include set-margin-padding(0 30px 0 0, 15px 15px 10px 15px);
    flex: 0 0 90px;
    background-color: rgba(#f55767, 0.1);
    border-radius: 50%;
  }
}
</style>

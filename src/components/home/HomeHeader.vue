<template>
  <section class="header">
    <span class="figure circle-1"></span>
    <span class="figure square"></span>
    <span class="figure circle-2"></span>
    <span class="figure circle-2-2"></span>
    <v-container>
      <v-row>
        <div class="col-6">
          <span class="upper-text"
            ><img
              src="..\src\assets\images\win-icon.png"
              alt="#1 Editiors Choice App of 2020"
            />
            #1 Editiors Choice App of 2020</span
          >
          <h1>Best app for your modern lifestyle</h1>
          <p class="lower-text">
            Increase productivity with a simple to-do app. App for managing your
            personal budgets.
          </p>
          <button-test bg-color="primary"></button-test>
          <button-test
            bg-color="#fff"
            btn-class="primary--text pr-8 pl-8"
            class="watch-demo"
            >Watch demo video</button-test
          >
        </div>
        <div class="col-6">
          <v-img
            max-height="730"
            src="..\src\assets\images\1_header\phone-1.png"
            contain
          ></v-img>
        </div> </v-row
    ></v-container>
  </section>
</template>

<script>
import ButtonTest from "../shared/SharedButton.vue";

export default {
  components: {
    ButtonTest,
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins";

.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-position: center bottom;
  background-image: url("/src/assets/images/1_header/header-background.png");
  background-size: contain;

  .figure {
    height: 20px;
    width: 20px;
    position: absolute;
    z-index: 0;
  }
  .circle-1 {
    border: 4px solid #d4cdfd;
    border-radius: 50%;
    top: 10%;
    left: 20%;
  }
  .circle-2,
  .circle-2-2 {
    border: 4px solid transparent;
    border-radius: 50px;
    background-image: linear-gradient(white, white),
      linear-gradient(to bottom, #ff636e, #f98d6c);
    background-origin: border-box;
    background-clip: content-box, border-box;
    top: 2%;
    left: 64%;
  }
  .circle-2-2 {
    top: 89%;
    left: 22%;
  }
  .square {
    border: 3px solid #d5cefd;
    top: 22%;
    left: 35%;
    transform: rotate(45deg);
  }
}

.container {
  width: 100%;
  max-width: 1070px;
  margin: auto;
  z-index: 1;

  .row {
    justify-content: space-between;
    align-items: center;
    .watch-demo:hover {
      color: #fff !important;
      background-color: $primary !important;
    }

    .upper-text {
      position: relative;
      font-size: 14px;
      color: $titleColor;
      background-color: #e2eaed;
      border-radius: 28px;
      padding: 5px 93px 5px 40px;

      img {
        @include set-position(absolute, 50%, none, none, 0);
        height: 100%;
        transform: translate(0, -50%);
      }
    }

    h1 {
      font-size: 57px;
      line-height: 1.014;
      color: $titleColor;
      margin-top: 15px;
      line-height: 1.25;
    }

    .lower-text {
      font-size: 18px;
      margin-top: 20px;
      color: $descColor;
      margin-bottom: 34px;
    }
  }
}
</style>

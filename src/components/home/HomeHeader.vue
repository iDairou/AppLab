<template>
  <section class="header">
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
          <v-btn
            color="#2500f9"
            class="white--text mr-4 font-weight-bold"
            rounded
            >Try for free</v-btn
          >
          <v-btn rounded class="pr-8 pl-8">Watch demo video</v-btn>
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
export default {
  data() {
    return {
      text: "test",
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-position: center bottom;
  background-image: url("/src/assets/images/1_header/header-background.png");
  background-size: contain;
}

.container {
  max-width: 1070px;

  .row {
    justify-content: space-between;
    align-items: center;
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
    }

    .v-btn {
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

      &:hover {
        color: #fff;
        background-color: $primary;
      }
    }
  }
}
</style>

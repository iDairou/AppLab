<template>
  <v-container>
    <v-row>
      <div class="col-6">
        <div class="upper-text-box">
          <vue-img
            width="30"
            height="30"
            contain
            src="src\assets\images\win-icon.png"
            alt="qwe"
          ></vue-img>
          <p>#1 Editiors Choice App of 2020</p>
        </div>

        <h1>Best app for your <br />modern lifestyle</h1>
        <p class="h1_lower-text"></p>
        <button>Try for free</button>
        <button>Watch demo video</button>
      </div>
      <div class="col-6">
        <v-img
          max-height="730"
          src="..\src\assets\images\1_header\phone-1.png"
          contain
        ></v-img>
      </div>
      <div class="header-bg"></div></v-row
  ></v-container>
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
.container {
  background-position: center bottom;
  background-image: url("/src/assets/images/1_header/header-background.png");
  background-size: 100%;

  .row {
    position: relative;
    height: 100vh;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .win-icon {
      // background-image: url("/src/assets/images/win-icon.png");
      width: 30px;
      height: 30px;
    }
  }

  h1 {
    font-size: 3rem;
    line-height: 4rem;
  }
}
</style>

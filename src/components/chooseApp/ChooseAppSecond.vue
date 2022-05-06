<template>
  <v-container
    ><v-row>
      <div class="choose-app-box">
        <div class="box-desc">
          <h3>Awesome app <br />features</h3>
          <p class="desc">
            Increase productivity with a simple to-do app. App for managing your
            personal budgets.
          </p>
          <div class="boxes">
            <shared-icon-box></shared-icon-box>
            <shared-icon-box></shared-icon-box>
            <shared-icon-box></shared-icon-box>
            <shared-icon-box></shared-icon-box>
          </div>
        </div>
        <div class="box-phone">
          <v-img
            class="first-phone"
            src="..\src\assets\images\6_ultimate-features\phone-3.png"
            alt="Phone"
          />
          <v-img
            class="second-phone"
            src="..\src\assets\images\6_ultimate-features\phone-4.png"
            alt="Phone"
          />
        </div>
      </div> </v-row
  ></v-container>
</template>
<script>
import SharedIconBox from "../shared/SharedIconBox.vue";

export default {
  components: {
    SharedIconBox,
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/mixins";

.choose-app-box {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  background-position: right;
  background-image: url("/src/assets/images/6_ultimate-features/ultimate-bg.png");
  background-size: contain;
  background-repeat: no-repeat;

  .box-desc {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    .boxes {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;

      .box-icon {
        display: flex;
        flex-direction: column;
        width: 40%;
      }
    }
  }
  .box-phone {
    position: relative;
    width: 80%;

    .first-phone {
      width: 70%;
      @include set-position(absolute, 50%, none, none, 50%);
      transform: translate(-50%, -50%);
    }
    .second-phone {
      width: 60%;
      @include set-position(absolute, 50%, none, none, 62%);
      transform: translate(-50%, -50%);
    }
  }
}
</style>

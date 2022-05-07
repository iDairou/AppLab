<template>
  <v-container
    ><v-row
      ><div class="features-box">
        <div class="box-phone">
          <v-img
            class="first-phone"
            src="..\src\assets\images\2_awesome-apps-features\phone-1_03.png"
            alt="Phone"
          />
        </div>
        <div class="box-desc">
          <h3>Awesome app <br />features</h3>
          <p class="desc">
            Increase productivity with a simple to-do app. App for managing your
            personal budgets.
          </p>
          <shared-icon-box
            img="2_awesome-apps-features/logo_03.png"
          ></shared-icon-box>
          <shared-icon-box
            img="2_awesome-apps-features/logo_06.png"
            boxClass="box-icon--blue"
            >Prototyping
            <template v-slot:paragraph>
              Ut sodales, elit blandit gravida dapibus, enim neque interdum
              massa, sit amet luctus quam velit at augue.
            </template>
          </shared-icon-box>
          <shared-icon-box
            img="2_awesome-apps-features/logo_08.png"
            boxClass="box-icon--green"
            >Vector Editing
            <template v-slot:paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pellentesque dolor vitae tellus vehicula, vel ornare magna
              sollicitudin.
            </template>
          </shared-icon-box>
        </div>
      </div></v-row
    ></v-container
  >
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
@import "@/styles/variables";
.features-box {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  .box-phone {
    position: relative;
    width: 50%;
    background-position: center;
    background-image: url("/src/assets/images/2_awesome-apps-features/features-bg_03.png");
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 50px;
    .first-phone {
      z-index: 2;
    }
  }

  .box-desc {
    h3 {
      font-size: 30px;
      margin-bottom: 5px;
      line-height: 1.2;
    }
    .desc {
      margin-bottom: 80px;
    }
    .box-icon {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      h4 {
        margin-bottom: 5px;
      }
    }
  }
}
</style>

<template>
  <v-container
    ><v-row>
      <div class="choose-app-box">
        <div class="box-desc">
          <!-- <h3>Awesome app <br />features</h3>
            <p class="desc">
              Increase productivity with a simple to-do app. App for managing
              your personal budgets.
            </p> -->
          <shared-header
            >Awesome app <br />features
            <template v-slot:description>
              Increase productivity with a simple to-do app. App for managing
              your personal budgets.</template
            >
          </shared-header>

          <div class="boxes">
            <shared-icon-box
              img="5_why-our-app/Home-page-test_39.png"
              boxClass="box-icon--light-red"
              >Vector Editing
              <template v-slot:paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                pellentesque dolor vitae tellus vehicula, vel ornare magna
                sollicitudin.
              </template>
            </shared-icon-box>
            <shared-icon-box
              img="5_why-our-app/Home-page-test_39.png"
              boxClass="box-icon--light-green"
              >Vector Editing
              <template v-slot:paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                pellentesque dolor vitae tellus vehicula, vel ornare magna
                sollicitudin.
              </template>
            </shared-icon-box>
            <shared-icon-box
              img="5_why-our-app/Home-page-test_39.png"
              boxClass="box-icon--light-yellow"
              >Vector Editing
              <template v-slot:paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                pellentesque dolor vitae tellus vehicula, vel ornare magna
                sollicitudin.
              </template>
            </shared-icon-box>
            <shared-icon-box
              img="5_why-our-app/Home-page-test_39.png"
              boxClass="box-icon--light-purple"
              >Vector Editing
              <template v-slot:paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                pellentesque dolor vitae tellus vehicula, vel ornare magna
                sollicitudin.
              </template>
            </shared-icon-box>
          </div>
          <button-test bg-color="primary"></button-test>
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
import ButtonTest from "../shared/SharedButton.vue";
import SharedHeader from "../shared/SharedHeader.vue";

export default {
  components: {
    SharedIconBox,
    ButtonTest,
    SharedHeader,
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/mixins";

.choose-app-box {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  background-position: right;
  background-image: url("/src/assets/images/6_ultimate-features/ultimate-bg.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 150px;
  .header-box {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    h3 {
      font-size: 35px;
      line-height: 1.2;
    }
    p {
      font-size: 13px;
    }
  }
  .box-desc {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    .v-btn {
      margin-top: 30px;
    }
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
        align-items: flex-start;
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

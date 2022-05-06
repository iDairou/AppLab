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
          <div class="box-icon">
            <div class="box-icon-img">
              <img
                src="..\src\assets\images\2_awesome-apps-features\logo_03.png"
                alt="First Icon"
              />
            </div>
            <div class="box-icon-desc">
              <h4>Fast Performance</h4>
              <p>
                Get your blood tests delivered at home collect a sample the news
                your blood tests
              </p>
            </div>
          </div>
          <div class="box-icon">
            <div class="box-icon-img">
              <img
                src="..\src\assets\images\2_awesome-apps-features\logo_06.png"
                alt="First Icon"
              />
            </div>
            <div class="box-icon-desc">
              <h4>Prototyping</h4>
              <p>
                Get your blood tests delivered at home collect a sample the news
                your blood tests
              </p>
            </div>
          </div>
          <shared-icon-box color="$redIcon"
            >TEST
            <template v-slot:paragraph>
              Get your blood tests delivered at home collect a sample the news
              your blood tests TEST
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
      .box-icon-img {
        margin-right: 30px;
        background-color: #ffecef;
        border-radius: 50%;
        padding: 15px 15px 10px 15px;
      }
    }
  }
}
</style>

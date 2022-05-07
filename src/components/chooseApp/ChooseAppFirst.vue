<template>
  <v-container
    ><v-row>
      <div class="text-content">
        <h2>Why you should choose our app</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sed
          dignissimos impedit quos hic delectus eligendi voluptatem tenetur,
          doloremque ea! Fugit saepe reiciendis.
        </p>
      </div>
      <div class="box-content">
        <shared-icon-box
          img="5_why-our-app/Home-page-test_25.png"
          boxClass="box-icon--light-red"
          >Vector Editing
          <template v-slot:paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pellentesque dolor vitae tellus vehicula, vel ornare magna
            sollicitudin.
          </template>
        </shared-icon-box>
        <shared-icon-box
          img="5_why-our-app/Home-page-test_31.png"
          boxClass="box-icon--light-blue"
          >Vector Editing
          <template v-slot:paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pellentesque dolor vitae tellus vehicula, vel ornare magna
            sollicitudin.
          </template>
        </shared-icon-box>
        <shared-icon-box
          img="5_why-our-app/Home-page-test_28.png"
          boxClass="box-icon--light-yellow"
          >Vector Editing
          <template v-slot:paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pellentesque dolor vitae tellus vehicula, vel ornare magna
            sollicitudin.
          </template>
        </shared-icon-box>
        <shared-icon-box
          img="5_why-our-app/Home-page-test_37.png"
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
          boxClass="box-icon--light-purple"
          >Vector Editing
          <template v-slot:paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pellentesque dolor vitae tellus vehicula, vel ornare magna
            sollicitudin.
          </template>
        </shared-icon-box>
        <shared-icon-box
          img="5_why-our-app/Home-page-test_59.png"
          boxClass="box-icon--light-orange"
          >Vector Editing
          <template v-slot:paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pellentesque dolor vitae tellus vehicula, vel ornare magna
            sollicitudin.
          </template>
        </shared-icon-box>
      </div>
    </v-row></v-container
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
.container {
  margin-top: 150px;
  .row {
    max-width: 990px;
    margin: 0 auto;
    text-align: center;
    .text-content {
      width: 50%;
      margin: 0 auto;
      h2 {
        font-size: 35px;
      }
      p {
        font-size: 13px;
      }
    }
    .box-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 50px;
      .box-icon {
        display: flex;
        flex-direction: column;
        width: 30%;
        .box-icon--img {
          margin: 0;
        }
      }
    }
  }
}
</style>

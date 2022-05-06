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
        <shared-icon-box></shared-icon-box>
        <shared-icon-box></shared-icon-box>
        <shared-icon-box></shared-icon-box>
        <shared-icon-box></shared-icon-box>
        <shared-icon-box></shared-icon-box>
        <shared-icon-box></shared-icon-box>
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
.container {
  margin-top: 100px;
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
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 50px;
      .box-icon {
        display: flex;
        flex-direction: column;
        width: 33%;
        .box-icon--img {
          margin: 0;
        }
      }
    }
  }
}
</style>

<template>
  <v-container
    ><v-row>
      <span>Montly</span>
      <input type="checkbox" id="toggle" class="toggle" />
      <label for="toggle"></label>
      <span>Annually</span>
      <div class="cards">
        <div class="price-card">
          <div class="upper">
            <p class="price">$0<span>/month</span></p>
            <h4>Business Class</h4>
            <p>For small teams or office</p>
          </div>
          <ul class="ul-list">
            <li>Drag & Drop Builder</li>
            <li>1,000's of Templates</li>
            <li>Blog Support Tools</li>
            <li>eCommerce Store</li>
            <button-test bgColor="primary" class="mr-0"
              >Start free trail</button-test
            >
          </ul>
        </div>
      </div>
    </v-row></v-container
  >
</template>

<script>
import ButtonTest from "../shared/SharedButton.vue";

export default {
  components: {
    ButtonTest,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";

.row {
  height: 50vh;
  .price-card {
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 10px;
    box-shadow: 0px -1px 18px -10px rgba(66, 68, 90, 1);
  }
  .upper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include set-margin-padding(0 0 0 0, 10px 10px 10px 10px);
    background-color: #fbfcfd;
    .price {
      font-size: 70px;
      font-weight: bold;
      color: black;
      margin: 0 auto;

      span {
        font-size: 15px;
        color: #999ca5;
      }
    }
    h4 {
      font-size: 25px;
    }
    p {
      font-size: 13px;
      color: #999ca5;
    }
  }
  .ul-list {
    font-size: 15px;
    list-style: none;
    text-align: center;
    flex-direction: column;
    @include set-margin-padding(0 0 0 0, 30px 70px 30px 70px);
    li {
      margin-top: 10px;
      margin-bottom: 20px;
      color: #999ca5;
    }
    .v-btn {
      margin: 0 !important;
    }
  }
}
</style>

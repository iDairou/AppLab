<template>
  <v-container
    ><v-row>
      <div class="toogle-box">
        <span>Montly </span>
        <button-test @changeContent="changeContent" bgColor="primary"
          >Change</button-test
        >
        <span>Annually</span>
      </div>

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
        <div class="price-card">
          <div class="upper">
            <p class="price">
              {{ price }}<span>{{ month }}</span>
            </p>
            <h4>Business Class</h4>
            <p>For small teams or office</p>
          </div>
          <ul class="ul-list">
            <li>Drag & Drop Builder</li>
            <li>1,000's of Templates</li>
            <li>Blog Support Tools</li>
            <li>eCommerce Store</li>
            <button-test bgColor="primary">Subscribe now</button-test>

            <button-test
              bg-color="#fff"
              btn-class="primary--text pr-8 pl-8"
              class="trail"
              >Or Start 14 days trail</button-test
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
  data() {
    return {
      price: "$99",
      month: "/month",
    };
  },
  methods: {
    changeContent() {
      this.price = "$960";
      this.month = "/year";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";

.row {
  align-items: center;
  margin: 0 auto;
  height: 50vh;
  .toogle-box {
    margin: 0 auto;
  }

  .cards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .price-card {
      margin: 50px;
      border-radius: 10px;
      box-shadow: 0px -1px 18px -10px rgba(66, 68, 90, 0.3);
      transition: box-shadow 0.3s;
      &:hover {
        box-shadow: 0px -1px 18px -10px rgba(66, 68, 90, 1);
      }
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
      display: flex;
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
      .trail {
        margin-top: 10px !important;
        &:hover {
          color: #fff !important;
          background-color: $primary !important;
        }
      }
    }
  }
}
</style>

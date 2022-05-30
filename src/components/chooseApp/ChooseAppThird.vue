<template>
  <v-container id="pricing"
    ><v-row>
      <div class="toogle-box">
        <v-btn-toggle rounded>
          <shared-button @emit="changeContent('m')" value="left">
            Monthly
          </shared-button>
          <shared-button @emit="changeContent('a')" value="center">
            <span>Annually</span>
          </shared-button>
        </v-btn-toggle>
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
            <shared-button bgColor="primary" class="mr-0"
              >Start free trail</shared-button
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
            <shared-button bgColor="primary">Subscribe now</shared-button>

            <shared-button
              bg-color="#fff"
              btn-class="primary--text pr-8 pl-8"
              class="trail"
              >Or Start 14 days trail</shared-button
            >
          </ul>
        </div>
      </div>
    </v-row></v-container
  >
</template>

<script>
import SharedButton from "../shared/SharedButton.vue";
import { OffertPlanning } from "@/enums/OffertPlanning.enum";

export default {
  components: {
    SharedButton,
  },
  data() {
    return {
      price: "$99",
      month: "/month",
    };
  },
  methods: {
    changeContent(type) {
      if (this.price === "$99") {
        this.price = "$960";
      } else {
        this.price = "$99";
      }

      this.month === "/month"
        ? (this.month = "/year")
        : (this.month = "/month");
      console.log(type);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";

.row {
  align-items: center;
  margin: 0 auto;
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

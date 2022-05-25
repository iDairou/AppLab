<template>
  <div class="border">
    <v-container
      ><v-row
        ><div class="section-client">
          <div class="left-side">
            <img
              class="background-img"
              src="@/assets/images/7_meet-client-satisfaction/Home-page341_06.png"
              alt=""
            />
            <img
              class="person-icons icon-1"
              src="@/assets/images/7_meet-client-satisfaction/person-1.png"
              alt=""
            />
            <img
              class="person-icons icon-2"
              src="@/assets/images/7_meet-client-satisfaction/person-2.png"
              alt=""
            />
            <img
              class="person-icons icon-3"
              src="@/assets/images/7_meet-client-satisfaction/person-3.png"
              alt=""
            />
            <img
              class="person-icons icon-4"
              src="@/assets/images/7_meet-client-satisfaction/person-4.png"
              alt=""
            />
            <img
              class="person-icons icon-5"
              src="@/assets/images/7_meet-client-satisfaction/person-5.png"
              alt=""
            />
            <img
              class="person-icons icon-6"
              src="@/assets/images/7_meet-client-satisfaction/jan.png"
              alt=""
            />
            <img
              class="person-icons icon-7"
              src="@/assets/images/7_meet-client-satisfaction/adam.png"
              alt=""
            />
          </div>
          <div class="right-side">
            <h3>
              Meet Client Satisfaction <br />
              by using product
            </h3>
            <p class="desc">
              The rise of mobile devices transforms the way we consume <br />
              elevant channels such as facebook
            </p>
            <v-carousel hide-delimiters>
              <v-carousel-item v-for="(client, i) in clients" :key="i">
                <span class="rates">
                  <img
                    src="@/assets/images/7_meet-client-satisfaction/star.png"
                    alt="#"
                    v-for="(rate, j) in maxRate"
                    :key="j"
                    :class="j < client.rate ? 'active' : ''"
                  />
                </span>
                <p class="header">{{ client.title }}</p>
                <p class="description">{{ client.description }}</p>
                <div class="person-box">
                  <img
                    :src="
                      require(`@/assets/images/7_meet-client-satisfaction/${client.user.photo}`)
                    "
                    alt=""
                  />
                  <p class="person-name">{{ client.user.name }}</p>
                  <p class="person-company">{{ client.user.company }}</p>
                </div>
              </v-carousel-item>
              <span class="line"></span>
            </v-carousel>
          </div></div></v-row
    ></v-container>
  </div>
</template>

<script>
import Clients from "@/data/ClientSatisfaction.data";

export default {
  data() {
    return {
      clients: Clients,
      maxRate: 5,
    };
  },
};
</script>
<style lang="scss">
.border {
  border-top: 2px solid #f4f4f4;
}
.section-client {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  .left-side {
    position: relative;
    .background-img {
      max-width: 100%;
    }

    .person-icons {
      position: absolute;

      &.icon-1 {
        top: 10%;
        left: 4%;
      }
      &.icon-2 {
        top: 40%;
        left: 10%;
      }
      &.icon-3 {
        top: -3%;
        left: 30%;
      }
      &.icon-4 {
        top: 33%;
        left: 35%;
      }
      &.icon-5 {
        top: 72%;
        left: 25%;
      }
      &.icon-6 {
        top: 55%;
        left: 55%;
      }
      &.icon-7 {
        top: 5%;
        left: 70%;
      }
    }
  }
  .v-btn {
    width: 30px !important;
    height: 30px !important;
  }
  .right-side {
    max-width: 50%;
    .line {
      height: 15px;
      border: 0.3px solid black;
      position: absolute;
      top: calc(67% - 22px);
      left: 87.5%;
      opacity: 10%;
      background: black;
    }
    h3 {
      font-size: 35px;
      line-height: 1.2;
      margin-bottom: 20px;
    }
    .desc {
      font-size: 15px;
    }
  }
  .rates {
    img {
      opacity: 40%;
      margin-bottom: 10px;
      &.active {
        opacity: 100%;
      }
    }
  }
  .v-window__prev {
    left: 75% !important;
  }
  .v-window__prev,
  .v-window__next {
    top: calc(65% - 20px);
    .v-btn {
      min-width: 20px;
      margin: 0;
      color: #dee1e6;
    }
  }
}
</style>

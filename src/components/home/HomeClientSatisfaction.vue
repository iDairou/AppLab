<template>
  <v-container
    ><v-row
      ><div class="section-client">
        <div class="left-side"></div>
        <div class="right-side">
          <h3>Meet Client Satisfaction</h3>
          <p>
            The rise of mobile devices transforms the way we consume elevant
            channels such as facebook
          </p>
          <v-carousel hide-delimiters>
            <v-carousel-item v-for="(client, i) in clients" :key="i">
              <span class="rates"></span>
              <p class="header"></p>
              <p class="description"></p>
              <div class="person-box">
                <img src="" alt="" />
                <p class="person-name"></p>
                <p class="person-company"></p>
              </div>
            </v-carousel-item>
          </v-carousel>
        </div></div></v-row
  ></v-container>
</template>

<script>
import Clients from "@/data/ClientSatisfaction.data";

export default {
  data() {
    return {
      clients: Clients,
    };
  },
};
</script>

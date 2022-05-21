<template>
  <v-footer padless id="app">
    <v-row justify="center" no-gutters>
      <h3><span class="app-color">App</span>Lab</h3>
      <v-btn
        v-for="(link, i) in links"
        :key="i"
        color="white"
        text
        class="my-2"
      >
        {{ link.name }}
      </v-btn>
      <div class="footer-icons">
        <button>Facebook</button>
        <button>Twitter</button>
        <button>Social</button>
        <button>Social</button>
      </div>
      <v-col class="py-8 text-center white--text" cols="12">
        <small>
          Copyright&copy; Arifur Rahman Tushar {{ new Date().getFullYear() }}.
          All rights reserved
        </small>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import Links from "@/data/Links.data";
export default {
  name: "App",
  data() {
    return {
      links: Links,
    };
  },
};
</script>

<style scoped lang="scss">
footer {
  background-color: #09142e !important;

  h3 {
    width: 100%;
    text-align: center;
    color: white;
    margin-top: 50px;
    font-size: 25px;
  }
  .v-btn {
    background: none;
    margin: 10px;
    font-size: 12px;
  }
  .footer-icons {
    width: 100%;
    text-align: center;
    color: white;
    button {
      margin: 10px;
      font-size: 15px;
    }
  }
  small {
    color: #313a50;
    margin-bottom: 50px;
  }
}
</style>

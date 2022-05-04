<template>
  <div class="position-container">
    <v-toolbar flat app max-height="150"
      ><v-toolbar-title class="font-weight-bold">
        <span class="app-color">App</span><span>Lab</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <ul class="nav-items">
        <a href="#">Home</a>
        <a href="#">Key Features</a>
        <a href="#">Pricing</a>
        <a href="#">Testiminial</a>
        <a href="#">FAQ</a>
        <button-test bg-color="primary"></button-test>
      </ul>
    </v-toolbar>
  </div>
</template>

<script>
import ButtonTest from "./shared/SharedButton.vue";

export default {
  components: {
    ButtonTest,
  },
};
</script>

<style lang="scss">
@import "@/styles/variables";
.position-container {
  width: 100%;
  position: fixed;
  z-index: 1000;
  padding: 30px;
  background-color: #fff;
}
.v-toolbar {
  width: 1171px;
  margin: 0 auto;
  background: gray;

  .v-toolbar-title {
    font-size: 30px;
  }
}

.app-color {
  color: #fcae61;
}

.v-application a {
  margin-right: 38px;
  color: #242f51 !important;
  text-decoration: none;
}

.v-btn {
  font-size: 16px;
  min-width: 170px;
  height: 57px;
  background: #fff;
  color: $primary;
  text-transform: none;
  letter-spacing: 0px;
  transition: background-color 0.3s;
  margin-top: 18.5px;
  box-shadow: none;

  &:hover {
    color: #fff;
    background-color: $primary;
  }
}
</style>

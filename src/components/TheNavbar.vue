<template>
  <div class="sticky-navs">
    <div class="menu-btn">
      <div class="menu-btn__burger"></div>
    </div>
    <v-app-bar>
      <v-toolbar flat app max-height="150"
        ><v-toolbar-title class="font-weight-bold">
          <span class="app-color">App</span><span>Lab</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <ul class="nav-items">
          <a href="#">Home</a>
          <a href="#features">Key Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#client-satisfaction">Testiminial</a>
          <a href="#faq">FAQ</a>
          <button-test bg-color="primary"></button-test>
        </ul> </v-toolbar
    ></v-app-bar>
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
.sticky-navs {
  position: sticky;
  top: 0;
  z-index: 100;
}
.v-sheet {
  width: 100% !important;
  background: #fff !important;
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

// Mobile Navbar

@media (max-width: 992px) {
  .menu-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1em;
    background: none;
    border: 1px solid transparent;
    font-size: 2rem;
    cursor: pointer;
    z-index: 1000;
    color: white;
    &__burger {
      width: 50px;
      height: 6px;
      background: rgb(8, 8, 8);
      border-radius: 5px;
      transition: all 0.5s ease-in-out;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 50px;
        height: 6px;
        background: rgb(7, 6, 6);
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
      }
      &::before {
        transform: translateY(-16px);
      }
      &::after {
        transform: translateY(16px);
      }
    }
    .open &__burger {
      transform: translateX(-50px);
      background: transparent;
    }
    .open &__burger::before {
      transform: rotate(45deg) translate(35px, -35px);
    }
    .open &__burger::after {
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }
}
</style>

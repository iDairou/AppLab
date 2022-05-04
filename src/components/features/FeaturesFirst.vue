<template>
  <v-container
    ><v-row>
      <h2>Trusted by companies like</h2>
      <div class="companies-box">
        <div>
          <img
            src="..\src\assets\images\2_awesome-apps-features\Home-page_15.png"
            alt="Sothwest Logo"
          />
        </div>
        <div>
          <img
            src="..\src\assets\images\2_awesome-apps-features\Home-page_06.png"
            alt="Anubis Logo"
          />
        </div>
        <div>
          <img
            src="..\src\assets\images\2_awesome-apps-features\Home-page_09.png"
            alt="Alonzo Logo"
          />
        </div>
        <div>
          <img
            src="..\src\assets\images\2_awesome-apps-features\Home-page_03.png"
            alt="Express Logo"
          />
        </div>
        <div>
          <img
            src="..\src\assets\images\2_awesome-apps-features\Home-page_12.png"
            alt="Maniac Logo"
          />
        </div>
      </div> </v-row
  ></v-container>
</template>

<style scoped lang="scss">
.container {
  height: 300px;
  h2 {
    font-size: 15px;
    width: 100%;
    text-align: center;
    margin: 80px 0 35px 0;
  }

  .companies-box {
    width: 950px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

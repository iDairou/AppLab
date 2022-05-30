<template>
  <div id="download" class="section-download">
    <v-container
      ><v-row>
        <h3>Download our APP now!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          at? Reprehenderit officiis esse sequi rerum!
        </p>
        <div class="button-position">
          <button>
            <img
              src="@/assets/images/8_download-out-app/google.png"
              alt="Google play icon"
            />
          </button>
          <button>
            <img
              src="@/assets/images/8_download-out-app/appStore.png"
              alt="App Store icon"
            />
          </button>
        </div> </v-row
    ></v-container>
  </div>
</template>

<style scoped lang="scss">
.section-download {
  background-image: url("@/assets/images/8_download-out-app/Home-page_07.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  border-top: 2px solid #f4f4f4;
  margin-top: 100px;
  .row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    min-height: 450px;
    h3 {
      font-size: 45px;
      line-height: 1.1;
      margin-bottom: 25px;
    }
    p {
      color: #7e8084;
      font-size: 15px;
      margin-left: 5px;
      margin-bottom: 30px;
    }
    .button-position {
      margin: 5px;
      button {
        margin-right: 30px;
      }
    }
  }
}
</style>

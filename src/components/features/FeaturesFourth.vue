<template>
  <v-container
    ><v-row
      ><div class="designed-box">
        <div class="designed-box-img">
          <img
            src="..\src\assets\images\4_designed-built\Designed-image.png"
            alt="Designed Image"
          />
        </div>
        <div class="designed-box-desc">
          <h3>Designed & build by the latest code integration</h3>
          <p class="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            repellat a nesciunt ipsam dolores amet tempore vero. Corporis
            reiciendis minus architecto! Est illo porro consequatur et commodi
            optio velit possimus?
          </p>
          <button-test bg-color="primary" class="margin-btn"></button-test>
        </div></div></v-row
  ></v-container>
</template>

<script>
import ButtonTest from "../shared/SharedButton.vue";

export default {
  components: {
    ButtonTest,
  },
};
</script>

<style scoped lang="scss">
.designed-box {
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  .designed-box-desc {
    width: 35%;
    margin-left: 100px;
    h3 {
      font-size: 35px;
      margin-bottom: 30px;
      line-height: 1.2;
    }
    .margin-btn {
      margin-top: 20px;
    }
  }
}
</style>

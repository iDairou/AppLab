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
          <!-- <h3>Designed & build by the latest code integration</h3>
          <p class="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            repellat a nesciunt ipsam dolores amet tempore vero. Corporis
            reiciendis minus architecto! Est illo porro consequatur et commodi
            optio velit possimus?
          </p> -->
          <shared-header
            >Designed & build by the latest code integration
            <template v-slot:description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              repellat a nesciunt ipsam dolores amet tempore vero. Corporis
              reiciendis minus architecto! Est illo porro consequatur et commodi
              optio velit possimus?</template
            >
          </shared-header>
          <button-test bg-color="primary"></button-test>
        </div></div></v-row
  ></v-container>
</template>

<script>
import ButtonTest from "../shared/SharedButton.vue";
import SharedHeader from "../shared/SharedHeader.vue";

export default {
  components: {
    ButtonTest,
    SharedHeader,
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
  margin-bottom: 70px;
  .designed-box-desc {
    width: 35%;
    margin-left: 100px;
  }
}
</style>

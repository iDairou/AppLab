<template>
  <v-container
    ><v-row>
      <div class="smart-box">
        <div class="smart-top">
          <h3>Smart jackpots that you may love this anytime & anywhere</h3>
          <span class="border"></span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            delectus. Itaque quod et perspiciatis alias expedita explicabo quas.
            Quaerat eum ut odit veniam quisquam repudiandae! Repellendus omnis
            ratione reprehenderit possimus!
          </p>
        </div>
        <div class="box-desc">
          <div class="box-icon">
            <div class="box-icon-img">
              <img
                src="..\src\assets\images\2_awesome-apps-features\logo_03.png"
                alt="First Icon"
              />
            </div>
            <div class="box-icon-desc">
              <h4>Fast Performance</h4>
              <p>
                Get your blood tests delivered at home collect a sample the news
                your blood tests
              </p>
            </div>
          </div>
          <div class="box-icon">
            <div class="box-icon-img">
              <img
                src="..\src\assets\images\2_awesome-apps-features\logo_06.png"
                alt="First Icon"
              />
            </div>
            <div class="box-icon-desc">
              <h4>Prototyping</h4>
              <p>
                Get your blood tests delivered at home collect a sample the news
                your blood tests
              </p>
            </div>
          </div>
          <div class="box-icon">
            <div class="box-icon-img">
              <img
                src="..\src\assets\images\2_awesome-apps-features\logo_08.png"
                alt="First Icon"
              />
            </div>
            <div class="box-icon-desc">
              <h4>Vector Editing</h4>
              <p>
                Get your blood tests delivered at home collect a sample the news
                your blood tests
              </p>
            </div>
          </div>
        </div>
      </div>
    </v-row></v-container
  >
</template>

<style scoped lang="scss">
.smart-box {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .box-desc {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    .box-icon {
      width: 30%;
      img {
        margin-bottom: 20px;
      }
      .box-icon-desc {
        h4 {
          margin-bottom: 10px;
        }
      }
    }
  }
  .smart-top {
    display: flex;
    align-items: center;
    justify-content: space-around;
    h3 {
      font-size: 40px;
      line-height: 1;
    }
    p {
      font-size: 12px;
      color: #616368;
    }
  }
  .border {
    height: 150px;
    width: 1px;
    border: 1px solid #b9b9b8;
    margin: 0 80px 0 80px;
  }
}
</style>

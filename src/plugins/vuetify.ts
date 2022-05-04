import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#2500f9",
      },
    },
  },
};

export default new Vuetify(opts);

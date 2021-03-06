import Vue from 'vue';
import Vuetify from 'vuetify';
// import { sync } from 'vuex-router-sync';
import 'vuetify/dist/vuetify.min.css';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuetify, {
  theme: {
    primary: 'cyan',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});

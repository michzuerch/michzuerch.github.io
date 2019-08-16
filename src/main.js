import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import {
  SkillBar
} from 'vue-skill-bar';

Vue.component('skill-bar', SkillBar);
Vue.config.productionTip = true;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');


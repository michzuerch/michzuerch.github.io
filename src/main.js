import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { SkillBar } from 'vue-skill-bar';
import 'vue2-animate/dist/vue2-animate.min.css';

Vue.component('skill-bar', SkillBar);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');

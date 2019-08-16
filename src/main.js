import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import {
  SkillBar
} from 'vue-skill-bar';

Vue.component('skill-bar', SkillBar);
Vue.config.productionTip = true;

let geo = fetch('https://extreme-ip-lookup.com/json/')
  .then(res => res.json())
  .then(response => {
    console.log("Country: ", response.country);
  })
  .catch((data, status) => {
    console.log('Request failed:',data, status);
  });

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');

console.log(geo);
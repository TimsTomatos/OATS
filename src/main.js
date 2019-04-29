import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootStrapVue from 'bootstrap-vue';
// font awesome stuff
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRuler , faUserFriends, faCalendarAlt, faRocket, faHourglass, faDigitalTachograph} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faRuler);
library.add(faHourglass);
library.add(faDigitalTachograph);

library.add(faUserFriends);
library.add(faCalendarAlt);
library.add(faRocket);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootStrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

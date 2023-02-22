import Vue from 'vue';
import VueSanitize from 'vue-sanitize';

import App from './App.vue';

Vue.config.devtools = true;
Vue.config.performance = true;
Vue.config.productionTip = false;

Vue.use(VueSanitize);

new Vue({
    render: (h) => h(App),
}).$mount('#app');

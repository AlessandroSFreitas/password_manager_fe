import { createApp } from 'vue'
import App from './App.vue'
import Notifications from '@/components/Notifications.vue';
import router from '@/router/index';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/main.css'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')

createApp(Notifications)
.mount('#notifications')

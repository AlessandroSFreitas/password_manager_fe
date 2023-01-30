import { createApp } from 'vue'
import App from './App.vue'
import Notifications from '@/components/Notifications.vue';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/main.css'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

createApp(Notifications)
.mount('#notifications')

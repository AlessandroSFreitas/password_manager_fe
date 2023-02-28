import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import SignUp from '@/components/SignUp.vue';
import Login from '@/components/Login.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;

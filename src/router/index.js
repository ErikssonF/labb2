import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '../view/WelcomeView.vue'
import MainView from '../view/MainView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainView,
        },
        {
        path: '/start',
        name: 'start',
        component: WelcomeView,
    }
    ]
});

export default router;
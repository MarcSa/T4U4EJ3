import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { authGuard } from '@/modules/auth/guards/authGuard';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: HomePage,
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('@/modules/landing/pages/AboutPage.vue'),
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/modules/landing/pages/ContactPage.vue'),
                },
                {
                    path: '/tasks',
                    name: 'tasks',
                    component: () => import('@/modules/tasks/pages/TaskList.vue'),
                    beforeEnter: [authGuard],
                },
                {
                    path: '/tasks/:id',
                    name: 'task-detail',
                    component: () => import('@/modules/tasks/pages/TaskDetail.vue'),
                    props: true,
                },
            ],
        },
        {
            path: '/auth',
            redirect: 'login',
            component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('@/modules/auth/pages/LoginPage.vue'),
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('@/modules/auth/pages/RegisterPage.vue'),
                },
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/common/components/NotFound.vue'),
        },
    ],
});

export default router;

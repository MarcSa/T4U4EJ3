import { createRouter, createWebHistory } from 'vue-router';
import GuestPage from '@/modules/users/pages/Guest.vue';
import { roleGuard } from '@/modules/auth/guards/roleGuard';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/modules/users/layouts/UsersLayout.vue'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: GuestPage,
                },
                {
                    path: '/admin/editor',
                    name: 'editor',
                    component: () => import('@/modules/users/pages/EditorPanel.vue'),
                    beforeEnter: roleGuard(['Editor', 'Admin']),
                },
                {
                    path: '/admin/config',
                    name: 'admin',
                    component: () => import('@/modules/users/pages/AdminConfig.vue'),
                    beforeEnter: roleGuard(['Admin']),
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

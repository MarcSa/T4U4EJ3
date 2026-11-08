import type { NavigationGuard } from 'vue-router';

function isAuthenticated(): boolean {
    return false;
}

export const authGuard: NavigationGuard = (to) => {
    if (isAuthenticated()) return true;

    return {
        name: 'login',
        query: { redirect: to.fullPath },
    };
};

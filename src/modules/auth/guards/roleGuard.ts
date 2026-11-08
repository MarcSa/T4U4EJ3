import type { NavigationGuard } from 'vue-router';
import type { UserState } from '@/modules/users/interfaces/user-state.interface';
import { getCurrentUser } from '@/modules/auth/services/user.service';

export const roleGuard = (allowedRoles: UserState['role'][]): NavigationGuard => {
    return (to) => {
        const user = getCurrentUser();
        if (!user.isAuthenticated) {
            console.warn(`Acceso denegado: usuario no autenticado con rol '${user.role}'.`);

            return { name: 'home' };
        }

        if (!allowedRoles.includes(user.role)) {
            console.warn(
                `Acceso denegado: usuario con rol '${user.role}' intentando acceder a ${to.fullPath}.`,
            );

            return { name: 'home' };
        }
        console.log(`Acceso permitido: usuario con rol '${user.role}'.`);

        return true;
    };
};

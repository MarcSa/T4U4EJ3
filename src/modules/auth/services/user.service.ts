import type { UserState } from '@/modules/users/interfaces/user-state.interface';

const currentUser: UserState = {
    isAuthenticated: false,
    role: 'Admin',
};

export const getCurrentUser = (): UserState => currentUser;

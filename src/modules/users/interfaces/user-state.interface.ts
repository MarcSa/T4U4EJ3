export interface UserState {
    isAuthenticated: boolean;
    role: 'Guest' | 'Editor' | 'Admin';
}

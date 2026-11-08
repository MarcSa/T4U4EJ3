<script setup lang="ts"></script>

<template>
    <form class="card shadow-sm" @submit.prevent novalidate>
        <div class="card-body p-4 p-md-5">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input id="email" type="email" class="form-control" placeholder="tu@email.com" />
            </div>

            <div class="mb-2">
                <label for="password" class="form-label">Contraseña</label>
                <input id="password" type="password" class="form-control" placeholder="••••••••" />
            </div>

            <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="remember" />
                    <label class="form-check-label" for="remember">Recuérdame</label>
                </div>
                <a href="#" class="small text-decoration-none">¿Olvidaste tu contraseña?</a>
            </div>

            <div class="d-grid">
                <button type="submit" class="btn btn-primary btn-lg">Entrar</button>
            </div>

            <p class="text-center text-secondary mt-4 mb-0">
                ¿No tienes cuenta?
                <RouterLink to="/register" class="text-decoration-none">Crear cuenta</RouterLink>
            </p>
        </div>
    </form>
</template>

<style scoped></style>

<script setup lang="ts"></script>

<template>
    <header class="mb-4 text-center">
        <h1 class="h3 fw-bold mb-1">Crear cuenta</h1>
        <p class="text-secondary mb-0">Regístrate para empezar a organizar tus tareas</p>
    </header>

    <form class="card shadow-sm" @submit.prevent novalidate>
        <div class="card-body p-4 p-md-5">
            <!-- Nombre completo -->
            <div class="mb-3">
                <label for="fullName" class="form-label">Nombre completo</label>
                <input
                    id="fullName"
                    type="text"
                    class="form-control"
                    placeholder="Tu nombre y apellidos"
                    autocomplete="name"
                />
            </div>

            <!-- Contraseña -->
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input
                    id="password"
                    type="password"
                    class="form-control"
                    placeholder="••••••••"
                    autocomplete="new-password"
                />
            </div>

            <!-- Confirmar contraseña -->
            <div class="mb-4">
                <label for="confirm" class="form-label">Repite la contraseña</label>
                <input
                    id="confirm"
                    type="password"
                    class="form-control"
                    placeholder="••••••••"
                    autocomplete="new-password"
                />
            </div>

            <!-- Botón de registro -->
            <div class="d-grid">
                <button type="submit" class="btn btn-primary btn-lg">Registrarme</button>
            </div>

            <!-- Enlace al login -->
            <p class="text-center text-secondary mt-4 mb-0">
                ¿Ya tienes cuenta?
                <RouterLink to="/login" class="text-decoration-none"> Iniciar sesión </RouterLink>
            </p>
        </div>
    </form>
</template>

<style scoped></style>

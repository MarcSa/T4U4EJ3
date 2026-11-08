<script setup lang="ts"></script>

<template>
    <div
        class="d-flex flex-column align-items-center justify-content-center text-center min-vh-100"
    >
        <h1 class="display-1 fw-bold text-primary">404</h1>
        <p class="fs-4 text-secondary mb-4">Ups... la página que buscas no existe.</p>
        <RouterLink to="/" class="btn btn-primary btn-lg"> Volver al inicio </RouterLink>
    </div>
</template>

<style scoped>
.display-1 {
    font-size: 6rem;
}
</style>

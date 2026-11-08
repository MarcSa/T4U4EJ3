<script setup lang="ts">
import { computed } from 'vue';

const year = computed(() => new Date().getFullYear());
</script>

<template>
    <footer class="mt-auto border-top bg-light">
        <div class="container py-3">
            <p class="mb-0 smalltext-muted">&copy; {{ year }} Vue Router App</p>
        </div>
    </footer>
</template>

<style scoped></style>

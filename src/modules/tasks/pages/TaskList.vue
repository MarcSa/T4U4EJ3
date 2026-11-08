<template>
    <section class="container py-4">
        <header class="d-flex align-items-center justify-content-between mb-3">
            <h1 class="h4 mb-0">Mis tareas</h1>
            <RouterLink to="/" class="btn btn-outline-secondary btn-sm">Volver a Home</RouterLink>
        </header>

        <div class="list-group">
            <RouterLink
                v-for="task in tasks"
                :key="task.id"
                :to="{ name: 'task-detail', params: { id: task.id } }"
                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
                <span>
                    <span
                        class="me-2 badge"
                        :class="task.done ? 'bg-success' : 'bg-warning text-dark'"
                    >
                        {{ task.done ? 'Hecha' : 'Pendiente' }}
                    </span>
                    {{ task.title }}
                </span>
                <span class="text-muted small">ID: {{ task.id }}</span>
            </RouterLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const tasks = [
    { id: 1, title: 'Estudiar Java', done: false },
    { id: 2, title: 'Preparar clase de Vue', done: true },
    { id: 3, title: 'Llamar al dentista', done: false },
];
</script>

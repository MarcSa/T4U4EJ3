<template>
    <section class="container py-4">
        <header class="d-flex align-items-center justify-content-between mb-3">
            <h1 class="h4 mb-0">Detalle de la tarea</h1>
            <RouterLink to="/tasks" class="btn btn-outline-secondary btn-sm">
                ← Volver al listado
            </RouterLink>
        </header>

        <p class="text-secondary">
            ID recibido por URL: <strong>{{ props.id }}</strong>
        </p>

        <div class="alert alert-info">
            Aquí haríamos la petición a la API para obtener los datos de la tarea con ID
            <strong>{{ props.id }}</strong> y los mostraríamos en esta vista.
        </div>

        <!-- Placeholder de contenido -->
        <div class="card mt-3">
            <div class="card-body">
                <h2 class="h5 mb-2">Título de la tarea (ejemplo)</h2>
                <p class="mb-0 text-secondary">
                    Descripción / estado / fecha… (cargados desde la API)
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

// Recibir el parámetro :id como prop (gracias a props: true en la ruta)
const props = defineProps<{ id: string }>(); // llega como string

onMounted(() => {
    console.log('[TaskDetail] id (prop):', props.id);
    // TODO: aquí haríamos la petición a la API:
    // con fetch(`/api/tasks/${props.id}`).then(...).catch(...) con axios ...
});
</script>

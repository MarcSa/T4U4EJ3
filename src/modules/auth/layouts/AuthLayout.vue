<script setup lang="ts">
import HeaderComponent from '@/common/components/HeaderComponent.vue';
import FooterComponent from '@/common/components/FooterComponent.vue';
</script>

<template>
    <div class="d-flex flex-column min-vh-100">
        <HeaderComponent />
        <main class="flex-grow-1">
            <div class="container py-4">
                <div class="row">
                    <div class="col">
                        <RouterView />
                    </div>
                </div>
            </div>
        </main>
        <FooterComponent />
    </div>
</template>

<style scoped></style>

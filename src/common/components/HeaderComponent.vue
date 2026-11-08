<script setup lang="ts"></script>

<template>
    <header class="menu navbar navbar-expand-lg bg-body-tertiary border-bottom bg-light">
        <div class="container">
            <RouterLink class="nav-link" to="/"
                ><img src="@/assets/logo.svg" alt="Vue logo" height="32" class="me-2" />
                <span class="fw-semibold">Vue Router App</span>
            </RouterLink>
            <!-- Toggler menu -->
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNav"
                aria-controls="mainNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Menu -->
            <nav class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/" exact-active-class="active"
                            >Home</RouterLink
                        >
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/about" exact-active-class="active"
                            >About</RouterLink
                        >
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/contact" exact-active-class="active"
                            >Contact</RouterLink
                        >
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/tasks" exact-active-class="active"
                            >Tasks</RouterLink
                        >
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped></style>

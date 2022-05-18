<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">Lesson 3</RouterLink>
      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#content"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="content">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Главная</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/register">Регистрация</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/todo">Список дел</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

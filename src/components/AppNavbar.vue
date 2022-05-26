<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">Lesson 7</RouterLink>
      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#content"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="content">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="(link, i) in links" :key="i">
            <RouterLink class="nav-link" :to="link.path">{{
              link.name
            }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Главная",
          path: "/",
        },
        {
          name: "Регистрация",
          path: "/register",
        },
        {
          name: "Список дел",
          path: "/todo",
        },
        {
          name: "Твиттер",
          path: "/twitter",
        },
        {
          name: "Градиент",
          path: "/gradient",
        },
        {
          name: "Директивы",
          path: "/directives",
        },
        {
          name: "Магазин",
          path: "/shop",
        },
        {
          name: "Слоты",
          path: "/slots",
        },
      ],
    };
  },
};
</script>

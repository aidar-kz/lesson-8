<template>
  <div class="container p-5">
    <section>
      <h4>v-list</h4>
      <div v-list.random="browsers" class="w-100 bg-success p-4 mt-4 shadow">
        <h3 class="text-white">Ниже должен выводиться список.</h3>
      </div>
    </section>

    <section>
      <h4>v-tag-class</h4>
      <div
        v-tag-class:h1="'text-warning'"
        class="w-100 bg-danger p-4 mt-4 shadow"
      >
        <div id="first">Ко мне должен добавиться тег с классом.</div>
        <div>Ко мне должен добавиться тег с классом.</div>
      </div>
    </section>

    <section>
      <h4>v-random-bg</h4>
      <textarea
        v-random-bg
        class="w-100 p-4 mt-4 text-white shadow"
        v-model="text"
      />
    </section>

    <section>
      <h4>v-weekend</h4>
      <div v-weekend class="w-100 bg-warning p-4 mt-4 text-white shadow">
        <h2>Этот div виден только в раб. дни</h2>
      </div>
    </section>

    <section>
      <h4>v-lorem</h4>
      <div class="w-100 bg-info p-4 mt-4 text-white shadow">
        <h2 v-lorem:ru="4"></h2>
        <p v-lorem:ru></p>
      </div>
    </section>
  </div>
</template>

<script>
import browsers from "@/assets/browsers";

export default {
  data() {
    return {
      text: "",
      browsers,
    };
  },
};
</script>

<style scoped>
section {
  margin-bottom: 100px;
}
</style>

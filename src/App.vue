<script setup>
import { RouterView } from "vue-router";
import AppNavbar from "@/components/AppNavbar.vue";
</script>

<template>
  <AppNavbar />

  <div class="container p-4">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
@import "bootstrap/dist/css/bootstrap.css";
</style>

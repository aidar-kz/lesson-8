<script setup>
import { RouterView } from "vue-router";
import AppNavbar from "@/components/AppNavbar.vue";
</script>

<template>
  <AppNavbar />
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
@import "bootstrap/dist/css/bootstrap.css";
</style>

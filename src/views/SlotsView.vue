<template>
  <main class="container p-5">
    <MyButton v-slot="{ text }">{{ text }}</MyButton>

    <MyButton class="ms-3" v-slot="slotProps">
      <span style="color: red">Click me</span>
      <span style="color: yellow">Again!</span>
    </MyButton>

    <div class="py-3"></div>

    <ArticleComponent>
      <template #header="headerProps">
        <h1>Это Заголовок</h1>
      </template>

      <p v-lorem:ru="19">Текст статьи</p>
      <p v-lorem:ru="19">Текст статьи</p>

      <template #footer="footerProps">
        <h4>{{ footerProps.message }}</h4>
        <p>Контакты автора, соцсети</p>
      </template>
    </ArticleComponent>

    <div class="py-3"></div>

    <CustomList>
      <template v-slot="{ brand, model }">
        <div class="card p-3">
          <h3>{{ brand }}</h3>
          <p>{{ model }}</p>
        </div>
      </template>
    </CustomList>
  </main>
</template>

<script>
import MyButton from "@/components/MyButton.vue";
import ArticleComponent from "@/components/ArticleComponent.vue";
import CustomList from "@/components/CustomList.vue";

export default {
  components: { MyButton, ArticleComponent, CustomList },
  data() {
    return {
      text: "Привет!",
      slotName: "header",
    };
  },
};
</script>

<style scoped></style>

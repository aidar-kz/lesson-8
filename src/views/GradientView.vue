<template>
  <div style="height: 100vh" :style="{ background: gradient }">
    <div class="container p-4">
      <ColorStop
        v-for="(color, index) in colors"
        :key="color.id"
        v-model="color.hex"
        :color="color"
        :index="index"
        :colors="colors"
      />
    </div>
  </div>
</template>

<script>
import ColorStop from "@/components/ColorStop.vue";

export default {
  components: { ColorStop },
  data: () => ({
    colors: [
      { id: 0, hex: "#ff000", disabled: false },
      { id: 1, hex: "#00ff00", disabled: false },
    ],
  }),
  computed: {
    gradient() {
      return "linear-gradient(45deg, red, green)";
    },
  },
};
</script>

<template>
  <div style="height: 100vh" :style="{ background: radialGradient }">
    <div class="container p-4">
      <div class="d-flex justify-content-between mb-3" style="max-width: 300px">
        <div>
          <button class="btn btn-primary" @click="addColor">
            <i class="bi bi-plus lg"></i>
          </button>

          <button class="btn btn-primary ms-1" @click="removeColor">
            <i class="bi bi-dash lg"></i>
          </button>
        </div>

        <button class="btn btn-primary" @click="generateGradient">
          Рандом
        </button>
      </div>

      <ColorStop
        v-for="(color, index) in colors"
        :key="color.id"
        v-model="color.hex"
        :color="color"
        :index="index"
        :colors="colors"
        @up="moveUp"
        @down="moveDown"
        @lock-color="lockColor"
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
      { id: 0, hex: "#ff0000", disabled: false },
      { id: 1, hex: "#00ff00", disabled: false },
    ],
    id: 2,
  }),

  methods: {
    addColor() {
      this.colors.push({ id: this.id, hex: this.randomHex(), disabled: false });
      this.id++;
    },

    removeColor() {
      if (this.colors.length > 2) {
        this.colors.pop();
      }
    },

    generateGradient() {
      for (let i = 0; i < this.colors.length; i++) {
        if (this.colors[i].disabled === false) {
          this.colors[i].hex = this.randomHex();
        }
      }
    },

    randomHex() {
      return "#" + Math.random().toString(16).slice(2, 8);
    },

    moveUp(index) {
      if (index > 0) {
        const temp = this.colors[index];
        this.colors[index] = this.colors[index - 1];
        this.colors[index - 1] = temp;
      }
    },

    moveDown(index) {
      if (index < this.colors.length - 1) {
        const temp = this.colors[index];
        this.colors[index] = this.colors[index + 1];
        this.colors[index + 1] = temp;
      }
    },

    lockColor(index) {
      this.colors[index].disabled === true
        ? (this.colors[index].disabled = false)
        : (this.colors[index].disabled = true);
    },
  },

  computed: {
    gradient() {
      let linearGradient = "linear-gradient(45deg";
      this.colors.forEach((color) => {
        linearGradient += `, ${color.hex}`;
      });
      linearGradient += ")";
      console.log(linearGradient);
      return linearGradient;
    },

    radialGradient() {
      let radialGradient = "radial-gradient(circle at center";
      this.colors.forEach((color) => {
        radialGradient += `, ${color.hex}`;
      });
      radialGradient += ")";
      console.log(radialGradient);
      return radialGradient;
    },
  },
};
</script>

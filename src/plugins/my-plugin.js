// import artades from "artades";

import MyComponent from "./MyComponent.vue";

export default {
  install(app, options) {
    // console.log(
    //   "%c Плагин подключен!",
    //   "color: red; font-size: 20px; text-shadow: 1px 2px 2px grey; text-decoration: line-through"
    // );

    app.config.globalProperties.PRIVET = "Привет из плагина!";

    // app.config.globalProperties.$makeItalic = function (text) {
    //   return `<i>${text}</i>`;
    // };

    app.directive("random-bg2", {
      updated(el, binding) {
        const randomNum = Math.random();
        const hex = randomNum.toString(16);
        const sliced = hex.slice(2, 8);
        el.style.backgroundColor = "#" + sliced;
      },
    });

    app.component("my-component", MyComponent);
  },
};

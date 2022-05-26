import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/todo",
      name: "todo",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TodoView.vue"),
    },
    {
      path: "/",
      name: "all-posts",
      component: () => import("../views/posts/AllPosts.vue"),
    },
    {
      path: "/create-post",
      name: "create-post",
      component: () => import("../views/posts/CreatePost.vue"),
    },
    {
      path: "/posts/:id",
      name: "view-post",
      component: () => import("../views/posts/ViewPost.vue"),
    },
    {
      path: "/posts/edit",
      name: "edit-post",
      component: () => import("../views/posts/EditPost.vue"),
      props: true,
    },

    {
      path: "/twitter",
      name: "all-tweets",
      component: () => import("../views/twitter/AllTweets.vue"),
    },
    {
      path: "/twitter/:id",
      name: "view-tweet",
      component: () => import("../views/twitter/ViewTweet.vue"),
    },

    {
      path: "/gradient",
      name: "gradient-view",
      component: () => import("../views/GradientView.vue"),
    },

    {
      path: "/directives",
      name: "directives-view",
      component: () => import("../views/DirectivesView.vue"),
    },

    {
      path: "/slots",
      name: "slots-view",
      component: () => import("../views/SlotsView.vue"),
    },

    {
      path: "/shop",
      name: "shop-layout",
      component: () => import("../views/shop/ShopLayout.vue"),
      children: [
        {
          path: "",
          name: "shop-view",
          component: () => import("../views/shop/ShopView.vue"),
        },
        {
          path: ":id",
          name: "item-view",
          component: () => import("../views/shop/ItemView.vue"),
        },
        {
          path: "cart",
          name: "cart-view",
          component: () => import("../views/shop/CartView.vue"),
        },
        {
          path: "checkout",
          name: "checkout-view",
          component: () => import("../views/shop/CheckoutView.vue"),
        },
        {
          path: "success",
          name: "success-view",
          component: () => import("../views/shop/SuccessView.vue"),
        },
      ],
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TodoView.vue')
    },
    {
      path: '/',
      name: 'all-posts',
      component: () => import('../views/posts/AllPosts.vue')
    },
    {
      path: '/create-post',
      name: 'create-post',
      component: () => import('../views/posts/CreatePost.vue')
    },
    {
      path: '/posts/:id',
      name: 'view-post',
      component: () => import('../views/posts/ViewPost.vue')
    },
    {
      path: '/posts/edit',
      name: 'edit-post',
      component: () => import('../views/posts/EditPost.vue'),
      props: true
    }
  ]
})

export default router

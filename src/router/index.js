import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/jobs",
    name: "job",
    component: () =>
      import(/* webpackChunkName: "jobs" */ "../views/jobs/JobsView.vue"),
  },
  {
    path: "/jobs/:id",
    name: "job-detail",
    component: () =>
      import(/* webpackChunkName: "jobs" */ "../views/jobs/JobDetailView.vue"),
      props: true,
  },
  //redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  //catchAll 404
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: () =>
    import(/* webpackChunkName: "notfound" */ "../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/:id",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue'),
    },
    {
        path: "/",
        name: "Landing",
        component: () => import(/* webpackChunkName: "landing" */ './pages/Landing.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
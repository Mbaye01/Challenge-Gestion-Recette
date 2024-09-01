import { createRouter, createWebHistory } from "vue-router";

import Home from "@views/Home.vue";
import List from "@views/recette/List.vue";
import Add from "@views/recette/Add.vue";
import Edit from "@views/recette/Edit.vue";
import Show from "@views/recette/Show.vue";
import NotFound from "@views/NotFound.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/recette",
        name: "recette",
        component: List
    },
    {
        path: "/recette/show/:id",
        name: "recette-show",
        component: Show
    },
    {
        path: "/recette/new",
        name: "recette-add",
        component: Add
    },
    {
        path: "/recette/edit/:id",
        name: "recette-edit",
        component: Edit
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
import {createRouter, createWebHistory} from "vue-router";
import Login from "@/components/userLogin.vue";

const routes = [
    {path:"/login",name:"home",component:Login},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;

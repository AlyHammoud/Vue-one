import {createRouter, createWebHistory} from "vue-router";
import DcHeros from "./components/DcHeros"
import AppCalendar from "./components/AppCalendar"
import AppHome from "./components/AppHome"

const routes = [
    {path: '/', component:AppHome},
    {path: '/dc-heros', component:DcHeros},
    {path: '/calendar', component:AppCalendar},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
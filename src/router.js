import {createRouter, createWebHistory} from "vue-router";
import DcHeros from "./pages/DcHeros"
import AppCalendar from "./pages/AppCalendar"
import AppHome from "./pages/AppHome"
import MarkDown from "./pages/MarkDown"

const routes = [
    {path: '/', component:AppHome},
    {path: '/dc-heros', component:DcHeros},
    {path: '/calendar', component:AppCalendar},
    {path: '/markdown', component:MarkDown},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
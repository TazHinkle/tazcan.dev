import Home from "../views/Home.vue"
import HtmlView from "../views/HtmlView.vue"
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/html', name: 'HtmlView', component: HtmlView},
        {path: '/css', name: 'CssView', component: () => import('../views/CssView.vue')},
        // everything else
        {path: '/resume', name: 'ResumeView', component: () => import('../views/ResumeView.vue')}
    ]
})
export default router

import Home from "../views/Home.vue"
import HtmlView from "../views/HtmlView.vue"
import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/html', name: 'HtmlView', component: HtmlView},
        {path: '/css', name: 'CssView', component: () => import('../views/CssView.vue')},
        {path: '/js', name: 'JavaScriptView', component: () => import('../views/JavaScriptView.vue')},
        {path: '/git', name: 'GitView', component: () => import('../views/GitView.vue')},
        {path: '/vue', name: 'VueView', component: () => import('../views/VueView.vue')},
        {path: '/resume', name: 'ResumeView', component: () => import('../views/ResumeView.vue')},
        {path: '/:pathMatch(.*)', component: Home},
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
})
export default router

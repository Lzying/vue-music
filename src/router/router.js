import VueRouter from 'vue-router'
// import Page from "../pages/Page";
// import Home from "../pages/home/Home";


const routes = [
    {
        path: '/', name: 'page', component: () => import('../pages/Page.vue'),
        children: [
            { path: '', redirect: '/recommend' },
            { path: 'recommend', component: () => import('../pages/recommend/Recommend.vue') },
            { path: 'hot', component: () => import('../pages/hot/Hot.vue') },
            { path: 'search', component: () => import('../pages/search/Search.vue') }
        ]
    },
    { path: '*', redirect: '/' },

    // {
    //     path: '/', name: 'page', component: Page,
    //     children: [
    //         { path: '', redirect: '/home' },
    //         { path: 'home', component: Home }
    //     ]
    // },
    // { path: '*', redirect: '/' },
]


const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
export default router


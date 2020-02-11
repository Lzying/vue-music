import VueRouter from 'vue-router'
// import Page from "../pages/Page";
// import Home from "../pages/home/Home";


const routes = [
    {
        path: '/', name: 'home', component: () => import('../pages/home/Home.vue'),
        children: [
            { path: '', redirect: '/recommend' },
            { path: 'recommend', component: () => import('../pages/home/recommend/Recommend.vue') },
            { path: 'hot', component: () => import('../pages/home/hot/Hot.vue') },
            { path: 'search', component: () => import('../pages/home/search/Search.vue') }
        ]
    },
    { path: '/play/:id', name: 'play', component: () => import('../pages/play/Play.vue') },
    { path: '/playlist/:id', name: 'playlist', component: () => import('../pages/playlist/Playlist.vue') },
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


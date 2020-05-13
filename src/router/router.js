import VueRouter from 'vue-router'
// import Page from "../pages/Page";
// import Home from "../pages/home/Home";


const routes = [
    {
        path: '/', name: 'home', component: () => import('@/pages/home/Home.vue'),
        children: [
            { path: '', redirect: 'recommend' },
            { path: 'recommend', component: () => import('@/pages/home/recommend/Recommend.vue') },
            { path: 'hot', component: () => import('@/pages/home/hot/Hot.vue') },
            { path: 'search', component: () => import('@/pages/home/search/Search.vue') }
        ]
    },
    { path: '/play/:id', name: 'play', component: () => import('@/pages/play/Play.vue') },
    { path: '/playlist/:id', name: 'playlist', component: () => import('@/pages/playlist/Playlist.vue') },
    {
        path: '/othertest', name: 'other', component: () => import('@/pages/other-test/OtherTest.vue'),
        children: [
            { path: '', redirect: 'ant-design' },
            { path: 'ant-design', name: 'ant-design', component: () => import('@/pages/other-test/test/AntDesign.vue') },
            { path: '*', redirect: 'ant-design' },

        ]
    },
    {
        path: '', redirect: '/',
        beforeEnter: (to, from, next) => {
            // 在对应的路由中拦截
            console.log(to);
            console.log(from);
            console.log(next);
        }
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
    routes, // (缩写) 相当于 routes: routes
    // scrollBehavior(to, from, savedPosition) {
    //     // return 期望滚动到哪个的位置
    //     console.log(to);
    //     console.log(from);
    //     console.log(savedPosition);
    //     return { x: 0, y: 500 }

    // }
})

router.beforeEach((to, from, next) => {
    // 全局，也可以在对应的路由中拦截
    // console.log(to);
    // console.log(from);
    // console.log(next);
    next();
})
router.afterEach((to, from) => {
    // 全局，也可以在对应的路由中拦截
    // console.log(to);
    // console.log(from);
})
export default router


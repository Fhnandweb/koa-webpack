import VueRouter from 'vue-router';
// import example1 from '../views/example/example1.vue'
// import example2 from '../views/example/example2.vue'
const example1 = () =>
    import ('../views/example/example1.vue')
const example2 = () =>
    import ('../views/example/example2.vue')

const routes = [{
        path: '/',
        component: example1
    },
    {
        path: '/example2',
        component: example2
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
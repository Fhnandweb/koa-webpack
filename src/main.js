import Vue from 'vue';
import App from './views/app.vue';
import VueRouter from 'vue-router'
import router from './router/router'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
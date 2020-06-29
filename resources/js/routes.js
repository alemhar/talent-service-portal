import VueRouter from 'vue-router';

let routes = [
    {
        path: '/basic-info',
        component: require('./components/BasicInfo.vue').default 
    }
];

export default new VueRouter({routes});
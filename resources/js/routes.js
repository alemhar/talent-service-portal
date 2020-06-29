export const routes = [
    {
        path: '/basic-info',
        component: require('./components/BasicInfo.vue').default 
    }
];

export default new VueRouter({routes});
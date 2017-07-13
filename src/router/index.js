import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Home from '@/pages/home'
const Home = r => require.ensure([], () => r(require('../pages/Home.vue')), 'Home')
const Classify = r => require.ensure([], () => r(require('../pages/Classify.vue')), 'Classify')
const Mine = r => require.ensure([], () => r(require('../pages/Mine.vue')), 'Mine')
const Cart = r => require.ensure([], () => r(require('../pages/Cart.vue')), 'Cart')
const Goodslist = r => require.ensure([], () => r(require('../pages/Goodslist.vue')), 'Goodslist')
const Details = r => require.ensure([], () => r(require('../pages/Details.vue')), 'Details')
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:"/",
    	component:Home
    },
    {
    	path:"/classify",
    	component:Classify
    },
    {
        path:"/mine",
        name:"/mine",
        component:Mine
    },
    {
        path:"/cart",
        component:Cart
    },
    {
        path:"/goodslist",
        component:Goodslist
    },
    {
        path:"/details/:id",
        name:"/details",
        component:Details
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '../components/productTest/Base.vue'
import productDetail from '../components/productTest/productDetail.vue'
import Profile from '../views/Profile.vue'
import Post from '../views/Post.vue'
import BaseLayout from '../components/homeworks/unit05/BaseLayout.vue'
import ProductPage from '../components/homeworks/unit05/ProductPage.vue'
import InvoicePage from '../components/homeworks/unit05/InvoicePage.vue'
import StatisticPage from '../components/homeworks/unit05/StatisticPage.vue'
import Product from '../components/homeworks/unit05/Product.vue'
import Order from '../components/homeworks/unit05/Order.vue'
import Client from '../components/homeworks/unit05/Client.vue'
import Revenue from '../components/homeworks/unit05/Revenue.vue'
import Inventory from '../components/homeworks/unit05/Inventory.vue'
import SystemPage from '../components/homeworks/unit05/SystemPage.vue'
import Login from '../components/homeworks/unit05/Login.vue'
import Home from  '../components/HelloWorld.vue'
import FormTodo from  '../components/FormTodo.vue'

// Unit07
import Cart from '../components/homeworks/unit07/lesision01/Cart.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todo',
    name: 'FormTodo',
    component: FormTodo
  },
  {
    path: '/base',
    name: 'Base',
    component: Base
  },
  {
    path: '/product-detail',
    name: 'productDetail',
    component: productDetail
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    children: [
      {
        path: 'profile',
        component: Profile
      },
      {
        path: 'post',
        component: Post
      },
    ]
  },
    //Unit 05
  {
    path: '/login',
    name : 'ProductPage',
    component: Login
  },
  {
    path : '/',
    name : 'BaseLayout',
    component: BaseLayout,
  },
  {
    path: '/product-management',
    name : 'ProductPage',
    component: ProductPage
  },
  {
    path: '/invoice-management',
    name : 'InvoicePage',
    component: InvoicePage
  },
  {
    path: '/statistic',
    name : 'StatisticPage',
    component: StatisticPage
  },
  {
    path: '/product',
    name : 'Product',
    component: Product
  },
  {
    path: '/order',
    name : 'Order',
    component: Order
  },
  {
    path: '/client',
    name : 'Client',
    component: Client
  },
  {
    path: '/revenue',
    name : 'Revenue',
    component: Revenue
  },
  {
    path: '/inventory',
    name : 'Inventory',
    component: Inventory
  },
  {
    path: '/system-installation',
    name : 'SystemPage',
    component: SystemPage
  },

    // unit07
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
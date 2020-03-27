import Vue from 'vue'
import VueRouter from 'vue-router'
// import TabBar from '../components/tabbar/TabBar.vue'
// import TabBarItem from "../components/tabbar/TabBarItem.vue"
// import Home from "../views/Home.vue"

const Home  = () => import('../views/Home/Home.vue')
const Category = () => import('../views/Category/Category.vue')
const Cart = () => import('../views/Cart/Cart.vue')
const Profile = () => import('../views/Profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect: "/home"
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

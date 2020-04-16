import Vue from 'vue'
import VueRouter from 'vue-router'
// import TabBar from '../components/tabbar/TabBar.vue'
// import TabBarItem from "../components/tabbar/TabBarItem.vue"
// import Home from "../views/Home.vue"

const Home  = () => import('../views/Home/Home.vue')
const Category = () => import('../views/Category/Category.vue')
const Cart = () => import('../views/Cart/Cart.vue')
const Profile = () => import('../views/Profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')

Vue.use(VueRouter)

// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }

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
  },
  {
    path: "/detail/:iid",
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

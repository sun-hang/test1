import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // 运营管理
    path: '/operate',
    name: 'Operate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 用户管理
    path: '/admin',
    name: "Admin"
  },
  {
    // 雨伞免费
    path: "/umbrella",
    name: "Umbrella"
  },
  {
    // 地图分布
    path: "/map",
    name: "Map"
  },
  {
    // 伞架管理
    path: "/umbrellaStand",
    name: "UmbrellaStand"
  },
  {
    // 商家管理
    path: "/business",
    name: "Business"
  }, {
    // 渠道管理
    path: "/channel",
    name: "Channel"
  },
  {
    // 优惠卷管理
    path: "/coupon",
    name: "Coupon"
  },
  {
    // 消息管理
    path: "/message",
    name: "Message"
  },
  {
    // 数据统计
    path: "/dataCount",
    name: "/DataCount"
  },
  {
    // 乐天订单
    path:"/order",
    name:"Order"
  },
  {
    // 系统管理
    path:"/system",
    name:"System"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

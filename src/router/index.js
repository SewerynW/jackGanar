import Vue from "vue"
import VueRouter from "vue-router"
import Results from "../views/Results.vue"
import Welcome from "../views/Welcome.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/results",
    name: "Results",
    component: Results
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router

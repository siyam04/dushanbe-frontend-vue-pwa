/* vue-router */
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

/* login component */
import Login from "@/views/Login";

/* work-submission components */
import WorkSubmissionCreate from "@/views/WorkSubmissionCreate";
import WorkSubmissionList from "@/components/layouts/partials/work_submission_create/WorkSubmissionList";

/* router middlewares */
import router_middlewares from "@/middlewares/middlewares";


// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

/* custom routes */
const routes = [

    {
        path: "/",
        name: "Login",
        component: Login,
    },

    {
        path: "/work-submission-create",
        name: "WorkSubmissionCreate",
        component: WorkSubmissionCreate,
        beforeEnter: router_middlewares.app_mode(),
    },

    {
        path: "/work-submission-list",
        name: "WorkSubmissionList",
        component: WorkSubmissionList,
        // beforeEnter: guardMyRoute,
    },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

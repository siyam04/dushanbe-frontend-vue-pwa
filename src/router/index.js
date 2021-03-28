/* vue-router */
import { createRouter, createWebHistory } from 'vue-router'

/* login component */
import Login from "@/views/Login";

/* work-submission components */
import WorkSubmissionCreate from "@/views/WorkSubmissionCreate";
import WorkSubmissionList from "@/components/layouts/partials/work_submission_create/WorkSubmissionList";

/* router middlewares */
import router_middlewares from "@/middlewares/middlewares";


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

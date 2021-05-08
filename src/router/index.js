/* vue-router */
import ViewListOffline from "@/components/layouts/partials/work_submission_create/ViewListOffline";
import WorkSubmissionList from "@/components/layouts/partials/work_submission_create/WorkSubmissionList";
/* login component */
import Login from "@/views/Login";
/* work-submission components */
import WorkSubmissionCreate from "@/views/WorkSubmissionCreate";
import { createRouter, createWebHistory } from 'vue-router';


/* check connectivity first */
// router_middlewares.app_mode()

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
        // beforeEnter: router_middlewares.app_mode(),
    },

    {
        path: "/work-submission-list",
        name: "WorkSubmissionList",
        component: WorkSubmissionList,
        // beforeEnter: router_middlewares.app_mode(),
        // beforeEnter: router_middlewares.guardRoute(),
    },

    {
        path: "/view-lists",
        name: "ViewListOffline",
        component: ViewListOffline,
        // beforeEnter: router_middlewares.app_mode(),
        // beforeEnter: router_middlewares.guardRoute(),
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

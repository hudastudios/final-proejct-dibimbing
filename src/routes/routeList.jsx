import BannerDashboard from "../assets/Dashboard/BannerDashboard"
import MyProfileDashboard from "../assets/Dashboard/MyProfileDashboard"
import DashboardUser from "../assets/Dashboard/UserDashboard"
import LoginModal from "../assets/modal/login"
import ActivityDetail from "../assets/pages/ActivityDetail"
import Home from "../assets/pages/home"
import PageActivity from "../assets/pages/PageActivity"
import PagePromo from "../assets/pages/PagePromo"
import PromoDetail from "../assets/pages/PromoDetail"
import ProtectedRoute from "./ProtectedRoute"
import CategoriesDashboard from "../assets/Dashboard/CategoriesDashboard"
import PromoDashboard from "../assets/Dashboard/PromoDashboard"
import ActivityDashboard from "../assets/Dashboard/ActivityDashboard"

export const routeList = [

    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/Promo',
        element: (<PagePromo></PagePromo>)
    },
    {
        path: '/Activity',
        element: (<PageActivity></PageActivity>)
    },
    {
        path: '/PromoDetail/:id',
        element: <PromoDetail></PromoDetail>
    },
    {
        path: '/LoginModal',
        element: <Home></Home>
    },
    {
        path: '/ActivityDetail/:id',
        element: <ActivityDetail></ActivityDetail>
    },
    {
        path: '/DashboardUser',
        element: <DashboardUser></DashboardUser>
    },
    {
        path: '/MyProfile',
        element: <MyProfileDashboard></MyProfileDashboard>
    },
    {
        path: '/BannerDashboard',
        element: <BannerDashboard></BannerDashboard>
    },
    {
        path: '/CategoriesDashboard',
        element: <CategoriesDashboard></CategoriesDashboard>
    },
    {
        path: '/PromoDashboard',
        element: <PromoDashboard></PromoDashboard>
    },
    {
        path: '/ActivityDashboard',
        element: <ProtectedRoute><ActivityDashboard></ActivityDashboard></ProtectedRoute>
    },
]
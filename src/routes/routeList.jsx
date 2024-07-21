import LoginModal from "../assets/modal/login"
import ActivityDetail from "../assets/pages/ActivityDetail"
import Home from "../assets/pages/home"
import PageActivity from "../assets/pages/PageActivity"
import PagePromo from "../assets/pages/PagePromo"
import PromoDetail from "../assets/pages/PromoDetail"
import ProtectedRoute from "./ProtectedRoute"

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



]
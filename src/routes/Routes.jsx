import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeCard from "../components/CoffeeCard";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("../categories.json"),
                children: [
                    {
                        path: "/category/:category",
                        element: <CoffeeCard />,
                    },
                ],
            },
            {
                path: "/coffees",
                element: <Coffees />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);

export default routers;

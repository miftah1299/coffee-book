import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
    },
]);

export default routers
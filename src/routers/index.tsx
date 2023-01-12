import React from "react";
import List from "pages/List/List";
import Login from "pages/Login/Login";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <List/>
    },
    {
        path: "/login",
        element: <Login/>
    },
]);

export default router;
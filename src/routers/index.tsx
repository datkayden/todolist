import React from "react";
import List from "pages/List/List";
import Login from "pages/Login/Login";
import Dashboard from "pages/Dashboard/Dashboard";
import Register from "pages/Register/Register";
import Project from "pages/Project/Project";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/todo-list",
        element: <List/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/project",
        element: <Project/>
    },
]);

export default router;
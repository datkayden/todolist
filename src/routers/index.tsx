import React from "react";
import List from "pages/List/List";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <List/>
    }
]);

export default router;
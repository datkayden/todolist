import React from "react";
import "App.css";
import router from "routers";
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import store from "store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );
}

export default App;

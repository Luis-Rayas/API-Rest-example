import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById("app")).render(
        <React.StrictMode>
            <ToastContainer autoClose={3000} />
            <RouterProvider router={router} />
        </React.StrictMode>
);

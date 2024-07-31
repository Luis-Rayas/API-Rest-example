import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import ErrorPage from "../pages/Error";
import Sidebar from "../layout/Root";
import NewAccount from '../components/newAccount';
import Transaction from "../components/Transaction";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Sidebar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/account",
                element: <NewAccount />,
            },
            {
                path: "/transaction",
                element: <Transaction />,
            }
        ]
    },

])

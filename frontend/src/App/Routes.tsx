import { createBrowserRouter, Navigate } from "react-router-dom";
import Budget from "../Budget";
import Dashboard from "../Budget/pages/Dashboard";
import Transactions from "../Budget/pages/Transactions";
import Cards from "../Budget/pages/Cards";
import Accounts from "../Budget/pages/Accounts";
import Settings from "../Budget/pages/Settings";
import ProfileSettings from "../Budget/pages/Settings/ProfileSettings";
import AppSettings from "../Budget/pages/Settings/AppSettings";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Budget />,
        children: [
            {
                index: true,
                element: <Navigate to="dashboard" />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "transactions",
                element: <Transactions />
            },
            {
                path: "cards",
                element: <Cards />
            },
            {
                path: "accounts",
                element: <Accounts />
            },
            {
                path: "settings",
                element: <Settings />,
                children: [
                    {
                        path: "profile",
                        element: <ProfileSettings />
                    },
                    {
                        path: "config",
                        element: <AppSettings />
                    }
                ]
            }
        ]
    }
]);
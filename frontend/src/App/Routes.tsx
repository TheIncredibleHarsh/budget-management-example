import { createBrowserRouter } from "react-router-dom";
import Budget from "../Budget";
import Dashboard from "../Budget/components/Dashboard";
import Transactions from "../Budget/components/Transactions";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Budget />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "transactions",
                element: <Transactions />
            }
        ]
    }
]);
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";

import ErrorPage from "./errorPage.jsx";
import LoginU from "./pages/LoginU.jsx";
import "./index.css";
import RegisterU from "./pages/RegisterU.jsx";
import ListUsers from "./pages/UserList.jsx"
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <LoginU />,
  },
  {
    path: "register",
    element: <RegisterU />,
  },
  {
    path: "userlist",
    element: <ListUsers />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

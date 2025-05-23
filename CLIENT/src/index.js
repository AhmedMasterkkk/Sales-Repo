import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import AuthLayout from "../src/layouts/AuthLayout";
import Login from "./pages/AUth/Login";
import Register from "../src/pages/AUth/Register";
import HomePage from "./pages/HomePage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage/> },
      {
        path: "auth",
        element: <AuthLayout />,
        children:[
        {
          path: "Login",
          element: <Login />,
        },
        {
          path: "Register",
          element: <Register/>,
        }
      ]
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Admin from "./pages/Admin";
import Upload from "./pages/Upload";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <PageNotFound /> },
  { path: "/admin", element: <Admin /> },
  { path: "/upload", element: <Upload /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import Add from "./Pages/Add/Add.jsx";
import All from "./Pages/All/All.jsx";
import Details from "./Pages/Details/Details.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import Login from "./Pages/Login/Login.jsx";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/all",
        element: <All />,
      },
      {
        path: "/blog/:id",
        element: <Details />,
        loader: ()=> fetch('http://localhost:5000/blogs')
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      }
    ],
  },
]);

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
      </AuthProvider>
  </React.StrictMode>
);

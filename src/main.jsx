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
import Private from "./Components/Private/Private.jsx";
import Wishlist from "./Pages/Wishlist/Wishlist.jsx";
import WishLsitDetails from "./Components/WishListDetails/WishLsitDetails.jsx";
import Feature from "./Pages/Feature/Feature.jsx";
import Update from "./Components/Update/Update.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Private><Add /></Private>,
      },
      {
        path: "/all",
        element: <All />,
      },
      {
        path: "/blog/:id",
        element: <Private><Details /></Private>,
        loader: ()=> fetch('https://b8a11-server-side-tanvir-art.vercel.app/blogs')
      },
      {
        path: "/wishlist/:id",
        element: <Private> <WishLsitDetails /></Private>,
        loader: ()=> fetch('https://b8a11-server-side-tanvir-art.vercel.app/wishlist')
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/wishlist",
        element: <Private><Wishlist /></Private>,
      },
      {
        path: "/feature",
        element: <Private><Feature/></Private>,
      },

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

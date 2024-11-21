import React from 'react'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './Pages/Home.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import Shop from './Pages/Shop.jsx'
import ProductDetails from './Pages/ProductDetail.jsx'
import User from './Pages/Userprofile.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import FaqPage from './Pages/FaqPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "productdetail/:id",
        element: <ProductDetails />,
      },
      {
        path: "User",
        element: <User />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "faqPage",
        element: <FaqPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

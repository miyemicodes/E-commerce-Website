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

import AccountOverview from './Pages/UserPages/AccountOverview.jsx'
import RecentlyViewedPage from './Pages/UserPages/RecentlyViewedPage.jsx'
import AccountManagmentPage from './Pages/UserPages/AccountManagmentPage.jsx'
import BookmarkPage from './Pages/UserPages/BookmarkPage.jsx'
import SavedItemsPage from './Pages/UserPages/SavedItemsPage.jsx'
import CloseAccountPage from './Pages/UserPages/CloseAccountPage.jsx'
import CartPage from './Pages/UserPages/CartPage.jsx'
import OrdersPage from './Pages/UserPages/OrdersPage.jsx'
import NewsletterPage from './Pages/UserPages/NewsletterPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'productdetail/:id',
        element: <ProductDetails />,
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'faqPage',
        element: <FaqPage />,
      },
      {
        path: 'User',
        element: <User />,
        children: [
          { index: true, element: <AccountOverview /> },
          {
            path: 'orders',
            element: <OrdersPage />,
          },
          {
            path: 'saved-items',
            element: <SavedItemsPage />,
          },
          {
            path: 'cart',
            element: <CartPage />,
          },
          {
            path: 'bookmark',
            element: <BookmarkPage />,
          },
          {
            path: 'recently-viewed',
            element: <RecentlyViewedPage />,
          },
          {
            path: 'account-managment',
            element: <AccountManagmentPage />,
          },
          {
            path: 'newsletter',
            element: <NewsletterPage />,
          },
          {
            path: 'close-Account',
            element: <CloseAccountPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

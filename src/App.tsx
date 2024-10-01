import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import PageError from './pages/PageError';
import SingleBlog from './pages/SingleBlog';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import ForgotPassword from './pages/ForgotPassword';
import OTPverification from './pages/OTPverification';
import Home from './pages/Home';

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    // Page erreur
    errorElement: (
      <PageError />
    ),
    children: [
      // Page d'inscription
      {
        path: 'signup',
        element: (
          <>
            <Inscription />
          </>
        )
      },
      // Page de connexion
      {
        path: 'signin',
        element: (
          <>
            <Connexion />
          </>
        )
      },

      // Page de verification d'otp
      {
        path: 'verify-otp',
        element: (
          <>
            <OTPverification />
          </>
        )
      },

      // Page de Resend otp
      {
        path: 'resend-otp',
        element: (
          <>
            <h2>resend otp</h2>
          </>
        )
      },

      // ManageUser
      {
        path: '',
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          // Go home page
          {
            path: '',
            element: (<>
              <Home />
            </>)
          },

          // Go home page
          {
            path: 'home/',
            element: (<>
              <Home />
            </>)
          },

          // Get one user information
          {
            path: '/:userID/profile',
            element: (<>
              <h1>Here user Info</h1>
            </>)
          },

          // Update users
          {
            path: 'profile',
            element: (<>
              <h1>Here user Info setting</h1>
            </>)
          },

        ]
      },

      // Managing Blogs
      {
        path: '',
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            path: 'blog/:id',
            element: (
              <>
                <SingleBlog />
              </>
            )
          }
        ]
      },
      // Setting part
      {
        path: 'config/',
        element: (<>
          <Outlet />
        </>),
        children: [
          {
            path: 'forgot-password/',
            element: <ForgotPassword />
          }
        ]
      }
    ]
  },
])

const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
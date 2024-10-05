import { createBrowserRouter, Outlet } from "react-router-dom"
import PageError from './pages/PageError';
import SingleBlog from './pages/SingleBlog';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import ForgotPassword from './pages/ForgotPassword';
import OTPverification from './pages/OTPverification';
import Navbar from './components/custom/Navbar';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Blog from './pages/Blog';
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import CreateBlog from "./pages/CreateBlog";

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
      // For the 3 principales navigate links: Home, Blog, and Chat
      {
        path: '',
        element: (
          <>
            <Navbar />
            <Outlet />
          </>
        ),
        children: [
          {
            path: '',
            element: <Home />
          },
          {
            path: '/home',
            element: <Home />
          },
          {
            path: '/blogs',
            element: <Blog />
          },
          {
            path: '/chat',
            element: <Chat />
          },
        ]
      },

      // For the authentification 
      {
        path: "auth/",
        element: <>
          <Outlet />
        </>,
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
        ]
      },

      // For Managing Blogs
      {
        path: 'blog/',
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          // To get only One blog
          {
            path: 'more/:id',
            element: (
              <>
                <SingleBlog />
              </>
            )
          },
          
          {

            path: 'new/',
            element: (
              <>
                <CreateBlog />
              </>
            )
          },

          // to update Blog
          {
            path: ':id/update/',
            element: (
              <>
                <SingleBlog />
              </>
            )
          },
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
      },

      // Managing-User
      {
        path: '/:id/',
        element: <Outlet />,
        children: [
          {
            path: 'profile',
            element: <>
              <Profile />
            </>
          },
          {
            path: 'dashboard',
            element: <>
              <Dashboard />
            </>
          },
        ]
      }
    ]
  },
])

export default Router;
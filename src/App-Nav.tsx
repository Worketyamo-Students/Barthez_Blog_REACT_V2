import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import PageError from './pages/PageError';
import SingleBlog from './pages/SingleBlog';



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
                        <h2>Inscription</h2>
                    </>
                )
            },
            // Page de connexion
            {
                path: 'login',
                element: (
                    <>
                        <h2>Connexion</h2>
                    </>
                )
            },

            // Page de verification d'otp
            {
                path: 'verify-otp',
                element: (
                    <>
                        <h2>verify otp</h2>
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
                        <Outlet/>
                    </>
                ),
                children: [
                    // Get one user information
                    {
                        path: '/:userID/profile',
                        element: (<>
                            <h1>Here user Info</h1>
                        </>)
                    },

                    // Update users
                    {
                        path: '/profile',
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
                        path: 'home',
                        element: (
                            <h2>Blog Home Page</h2>
                        ),
                    },

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
        ]
    },
])

const App2: React.FC = () => {
    return (
        <div>
            <RouterProvider router={Router} />
        </div>
    )
}

export default App2
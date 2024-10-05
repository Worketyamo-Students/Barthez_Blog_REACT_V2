import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import Router from './Router'

const App: React.FC = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={Router} />
        </ThemeProvider>
    )
}

export default App
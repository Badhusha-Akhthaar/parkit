import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'

import { ThemeProvider } from '@ui5/webcomponents-react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: []
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'

import { ThemeProvider } from '@ui5/webcomponents-react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import BookGarage from './pages/BookGarage.jsx';
import Garages from './pages/Garages.jsx'
import ManageGarage from './pages/ManageGarage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: 'garages',
        element: <Garages/>
      },
      {
        path: 'manage',
        element: <ManageGarage/>
      },
      {
        path: 'view/:garageId'
      },
      {
        path: 'book/:garageId',
        element: <BookGarage/>
      },
      {
        path: 'manage/:garageId'
      }
    ]
  },
  {
    path: '/home',
    element: <Home/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)

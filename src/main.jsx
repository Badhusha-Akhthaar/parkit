import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'

import Firebase from './Firebase.js'

import { ThemeProvider } from '@ui5/webcomponents-react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Search from './pages/Search.jsx'
import MyGarages from './pages/MyGarages.jsx'
import NewGarage from './pages/NewGarage.jsx'
import BookGarage from './pages/BookGarage.jsx'
import Authentication from './pages/Authentication.jsx'
import EditGarage from './pages/EditGarage.jsx'
import Bookings from './pages/Bookings.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'search',
        element: <Search/>
      },
      {
        path: 'mygarages',
        element: <MyGarages/>
      },
      {
        path: 'garage/new',
        element: <NewGarage/>
      },
      {
        path: 'book/:garageId',
        element: <BookGarage/>
      },
      {
        path: 'login',
        element: <Authentication/>
      },
      {
        path: 'manage/:garageId',
        element: <EditGarage/>  
      },
      {
        path: 'bookings',
        element: <Bookings/> 
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)

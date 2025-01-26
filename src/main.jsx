import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Contact from './components/Contact'
import Error from './components/Error'
import Body from './components/Body'
import RestaurantMenu from './components/RestaurantMenu'
import Cart from './components/Cart'





// import Grocery from './components/Grocery'

// Lazy loading 
// chunking 
// code splitting
// on demand loading
// Dynamic bundling

const Grocery = lazy(()=> import('./components/Grocery'));



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu/>
      },
      {
        path: "/grocery",
        element: <Grocery/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)


import React from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Feed from './components/Feed'


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
            children:[
                {
                    path:'/',
                    element:<Feed/>
                },
                {
                    path:'/profile',
                    element:<Profile/>
                }
            ]
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/profile',
            element: <Profile/>
        }
    ])
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body
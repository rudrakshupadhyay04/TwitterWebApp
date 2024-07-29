import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'
import { Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <div className='flex justify-around'>
        <LeftSideBar/>
        <Outlet/>
        <RightSideBar/>
    </div>
  )
}

export default Home
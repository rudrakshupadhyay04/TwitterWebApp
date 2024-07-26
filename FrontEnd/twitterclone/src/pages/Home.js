import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import Feed from '../components/Feed'
import RightSideBar from '../components/RightSideBar'

const Home = () => {
  return (
    <div className='flex justify-around'>
        <LeftSideBar/>
        <Feed/>
        <RightSideBar/>
    </div>
  )
}

export default Home
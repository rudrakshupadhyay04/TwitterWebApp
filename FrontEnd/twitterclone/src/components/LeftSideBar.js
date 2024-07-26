import React from 'react'
import { RiTwitterXLine } from "react-icons/ri";
import { IoMdHome, IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch, CiBookmark, CiLogout   } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


const LeftSideBar = () => {
  return (
    <div>
        <div>
            <div className=' ml-4'> 
              <RiTwitterXLine size={"26px"}/>
            </div>
            <div className=''> 

              <div className=' flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <IoMdHome size={"24px"}/>
              <h1 className=' ml-2 font-bold text-lg'>Home</h1>
              </div>

              <div className=' flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <CiSearch size={"24px"}/>
              <h1 className=' ml-2 font-bold text-lg'>Explore</h1>
              </div>

              <div className=' flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <IoIosNotificationsOutline size={"24px"}/>
              <h1 className=' ml-2 font-bold text-lg'>Notification</h1>
              </div>

              <div className=' flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <RiMessage2Line size={"24px"}/>
              <h1 className=' ml-2 font-bold text-lg'>Messages</h1>
              </div>

              <div className=' flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <CgProfile size={"24px"}/>
              <h1 className=' ml-2 font-bold text-lg'>Profile</h1>
              </div>

              <div className=' flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <CiBookmark  size={"24px"}/>
              <h1 className=' ml-2 font-bold text-lg'>Bookmarks</h1>
              </div>

              <div className=' flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <CiLogout  size={"24px"}/>
              <h1 className=' ml-2 font-bold text-lg'>Logout</h1>
              </div>

              <button className='px-2 py-2 my-2 border-none text-white bg-[#1D9BF0] w-full rounded-full font-bold hover:bg-blue-500'>Post</button>

            </div>
        </div>
    </div>
  )
}

export default LeftSideBar
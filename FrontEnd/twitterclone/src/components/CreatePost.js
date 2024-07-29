import React from 'react'
import Avatar from 'react-avatar';
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className=' w-full'>

        <div className='flex items-center border-b border-gray-200 text-center '>
            <div className='hover:cursor-pointer hover:bg-gray-200 w-full px-4 py-3'><h1 className='font-bold text-gray-600 text-lg '>For you</h1></div>
            <div className='hover:cursor-pointer hover:bg-gray-200 w-full px-4 py-3'><h1 className='font-bold text-gray-600 text-lg hover:cursor-pointer'>Following</h1></div>
        </div>

        <div >
            <div className='flex items-center p-4'>
                <div>
                    <Avatar src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" size="60" round={true} />
                </div>
                <input type='text'placeholder='What is happening?!' className='w-full border-none outline-none text-lg ml-2'/>
            </div>

            <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                <div><CiImageOn size='24px'/></div>
                <button className='bg-[#1D9BF0] py-1 px-4 rounded-full text-white text-lg text-right'>Post</button>
            </div>
        </div>
    </div>
  )
}

export default CreatePost
import React from 'react'
import Avatar from 'react-avatar'
import { CiBookmark, CiHeart } from 'react-icons/ci'
import { FaRegCommentDots } from "react-icons/fa";

const Tweet = () => {
  return (
    <div className=' border-b border-gray-200'>
        <div>
            <div className='flex p-4'>
                <Avatar src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" size="60" round={true} />
                <div className='ml-2 w-full'>
                    <div className='flex items-center'>
                        <h1 className=' font-bold'>Rudraksh</h1>
                        <p className='ml-1 text-gray-500 text-sm'>@rudraksh . 4m</p>
                    </div>
                    <div>
                        <p>Helooo developers lets connect and grow together</p>
                    </div>
                    <div className='flex justify-between my-3'>
                        <div className='flex items-center'>
                            <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                            <CiHeart size={'24px'}/>
                            </div>
                            <p>0</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                            <FaRegCommentDots size={'20px'}/>
                            </div>
                            <p>0</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                            <CiBookmark size={'24px'}/>
                            </div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tweet
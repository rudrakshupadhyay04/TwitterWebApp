import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div className=' w-2/5 border border-gray-200'>
    <CreatePost/>
    <Tweet/>
    </div>
  )
}

export default Feed
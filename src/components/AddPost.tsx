import Image from 'next/image'
import React from 'react'

function AddPost() {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      {/* AVATAR */}
      <div>
        <Image src={"https://images.pexels.com/photos/6000789/pexels-photo-6000789.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}  width={48} height={48} alt="" className='w-12 h-12 object-cover rounded-full'/>
      </div>
      {/* POST*/}
      <div className='flex-1'>
        {/* TEXT INPUT */}
        <div className='flex gap-4'>
          <textarea placeholder="What's on your mind?" className='flex-1 bg-slate-100 rounded-lg p-2' name="" id=""></textarea>
          <Image src="/emoji.png"  width={20} height={20} alt="" className='w-5 h-5 cursor-pointer self-end'/>

        </div>
          {/* POST OPTIONS*/}
          <div className='flex items-center gap-4 mt-4 flex-wrap text-gray-400'>
            <div className='flex items-center gap-2 cursor-pointer'>
            <Image src="/addimage.png"  width={20} height={20} alt="" />
            Photo
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
            <Image src="/addVideo.png"  width={20} height={20} alt="" />
            Video
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
            <Image src="/poll.png"  width={20} height={20} alt="" />
            Poll
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
            <Image src="/addevent.png"  width={20} height={20} alt="" />
            Event
            </div>
          </div>
      </div>
   
    </div>
  )
}

export default AddPost
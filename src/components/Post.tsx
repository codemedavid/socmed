import Image from 'next/image'
import React from 'react'
import Comments from './Comments'
function Post() {
  return (
    <div className='flex flex-col gap-4 '>
        {/* USER */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image width={40} height={40} src='https://images.pexels.com/photos/14598678/pexels-photo-14598678.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' className='w-10 h-10 rounded-full'/>
                <span className='font-medium'>Jack McBide</span>
            </div>
            <Image width={16} height={16} src='/more.png' alt='' />
        </div>
        {/*DESC */}
        <div>
            <div className='w-full min-h-96 relative'>
            <Image 
            src='https://images.pexels.com/photos/14598678/pexels-photo-14598678.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' fill alt='' className='object-cover rounde-md'/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis ad tempora expedita enim quasi ratione consequuntur illum magnam voluptatibus eaque quis, aliquid sint cumque minus laboriosam in, repellat architecto.</p>
        </div>
        {/* INTERACTION */}
        <div className='flex items-center justify-between text-sm my-4'>
            <div className="flex gap-8">           
                <div className="flex items-center gap-4  bg-slate-50 p-2 rounded-xl">
                    <Image width={16} height={16} src='/like.png' alt='' className='cursor-pointer'/>
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>123 <span className='hidden md:inline'>Likes</span></span>
                </div>
                <div className="flex items-center gap-4  bg-slate-50 p-2 rounded-xl">
                    <Image width={16} height={16} src='/comment.png' alt='' className='cursor-pointer'/>
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>123 <span className='hidden md:inline'>Comments</span></span>
                </div>
                <div>
            </div>
        </div>
        <div>
            <div className="flex items-center gap-4  bg-slate-50 p-2 rounded-xl">
                <Image width={16} height={16} src='/share.png' alt='' className='cursor-pointer'/>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>123 <span className='hidden md:inline'>Shares</span></span>
            </div>
        </div>
        </div>
      <Comments />
    </div>
  )
}

export default Post
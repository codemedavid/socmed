import React from 'react'
import LeftMenu from '@/components/LeftMenu'
import RightMenu from '@/components/RightMenu'
import Feed from '@/components/Feed'
import Image from 'next/image'
function ProfilePage() {
  return (
    <div className='flex gap-6 pt-6'>
    <div className="hidden xl:block w-[20%]"><LeftMenu type='profile'/></div>
    <div className="w-full lg:w-[70%]">
      <div className="flex flex-col gap-6">
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full h-64 relative'>
            <Image src={"https://images.pexels.com/photos/27287516/pexels-photo-27287516/free-photo-of-robin-walking-the-pavement.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='' fill className='object-cover rounded-md'/>
            <Image src={"https://images.pexels.com/photos/27284042/pexels-photo-27284042/free-photo-of-a-woman-laying-on-a-bed-with-her-feet-up.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='' width={128} height={128} className='w-32 h-32 right-0 m-auto -bottom-16 ring-4 ring-white object-cover rounded-full absolute z-10 left-0'/>
          </div>
          <h1 className='font-medium text-2xl mt-20 mb-4 '>Jim Ronquillo</h1>
          <div className='flex gap-6'>
            <div className='flex flex-col items-center'>
              <span className='font-medium'>142</span>
              <span>Posts</span>
            </div>

            <div className='flex flex-col items-center'>
              <span className='font-medium'>1.2K</span>
              <span>Followers</span>
            </div>

            <div className='flex flex-col items-center'>
              <span className='font-medium'>1.4K</span>
              <span>Following</span>
            </div>
          </div>
        </div>
        <Feed />
      </div>
    </div>
    <div className="hidden lg:block w-[30%]"><RightMenu userId={"test"}/></div>
  </div>
  )
}

export default ProfilePage
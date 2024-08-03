import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function UserInfoCard({userId} : {userId :string}) {
  return (
    <div className="p-4 flex flex-col gap-4 bg-white rounded-lg shadow-md text-sm">
    {/* TOP */}
      <div className='flex justify-between'>
        <p className="text-gray-500 text-sm">User Information</p>
        <Link href="/" className="text-blue-500 text-sm">See All</Link>
      </div>

      <div className='flex gap-3 items-center'>
        <p className='text-lg'>Elva Weaver</p>
        <span className='text-gray-500'>@drenins</span>
      </div>

      <div>
        <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 😁</p>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-3'>
          <Image src={"/map.png"} alt='' width={40} height={40} className='w-4 h-4'/>
          <p className='text-gray-500'>Living in <span className='font-semibold'>Denver</span></p>
        </div>

        <div className='flex items-center gap-3'>
          <Image src={"/school.png"} alt='' width={40} height={40} className='w-4 h-4'/>
          <p className='text-gray-500'>Went to <span className='font-semibold'>STI College Bacoor</span></p>
        </div>

        <div className='flex items-center gap-3'>
          <Image src={"/work.png"} alt='' width={40} height={40} className='w-4 h-4'/>
          <p className='text-gray-500'>Works at <span className='font-semibold'>Apple Inc.</span></p>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Image src={"/link.png"} alt='' width={40} height={40} className='w-4 h-4'/>
            <Link href="/" className='text-blue-500'>dre.net</Link>
          </div>
          <div className='flex gap-1'>
            <Image src={"/date.png"} alt='' width={40} height={40} className='w-4 h-4'/>
            <p className='text-gray-500'>Joined November 2024</p>

          </div>
        </div>
      </div>
      <button className='bg-blue-500 p-2 rounded-md text-white font-medium'>Following</button>
      <div className='flex justify-end'>
        <p className='text-red-500 font-semibold'>Block User</p>
      </div>
    </div>
  )
}

export default UserInfoCard
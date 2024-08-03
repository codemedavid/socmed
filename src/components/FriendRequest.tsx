import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function FriendRequest() {
  return (
    <div className="p-4 flex flex-col gap-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className='flex justify-between'>
        <p className="text-gray-500 text-sm">Friend Request</p>
        <Link href="/" className="text-blue-500 text-sm">See All</Link>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image className='rounded-full object-cover w-10 h-10 ' 
            src={"https://images.pexels.com/photos/5326566/pexels-photo-5326566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=''
            height={40}
            width={40}
            />
            <span className='font-semibold'>Wayne Paras</span>
        </div>
        <div  className='flex gap-2 justify-end'>
          <Image src={"/accept.png"} alt=''className='cursor-pointer' width={20} height={20}/>
          <Image src={"/reject.png"} alt=''className='cursor-pointer' width={20} height={20}/>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image className='rounded-full object-cover w-10 h-10 ' 
            src={"https://images.pexels.com/photos/5326566/pexels-photo-5326566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=''
            height={40}
            width={40}
            />
            <span className='font-semibold'>Dre Nins</span>
        </div>
        <div  className='flex gap-2 justify-end'>
          <Image src={"/accept.png"} alt=''className='cursor-pointer' width={20} height={20}/>
          <Image src={"/reject.png"} alt=''className='cursor-pointer' width={20} height={20}/>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image className='rounded-full object-cover w-10 h-10 ' 
            src={"https://images.pexels.com/photos/5326566/pexels-photo-5326566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=''
            height={40}
            width={40}
            />
            <span className='font-semibold'>Jim Ronquillo</span>
        </div>
        <div  className='flex gap-2 justify-end'>
          <Image src={"/accept.png"} alt=''className='cursor-pointer' width={20} height={20}/>
          <Image src={"/reject.png"} alt=''className='cursor-pointer' width={20} height={20}/>
        </div>
      </div>

    </div>
  )
}

export default FriendRequest
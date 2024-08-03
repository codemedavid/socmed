import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Birthdays() {
  return (
    <div className='p-4 flex flex-col gap-4 bg-white rounded-lg shadow-md text-sm'>
      <p>Birthdays</p>
      {/* Middle */}
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <Image className='rounded-full object-cover w-10 h-10 ' 
            src={"https://images.pexels.com/photos/5326566/pexels-photo-5326566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=''
            height={40}
            width={40}
            />
            <span className='font-semibold'>Fannie Bridges</span>
        </div>
        <div className='flex items-center justify-center'>
          <button className='font-medium rounded-lg py-1 px-2 text-white bg-blue-500 text-xs'>Celebrate</button>
        </div>
      </div>
      {/* BOTTOM */}
      <div className='bg-slate-100 p-4 rounded-lg flex items-center gap-4'>
          <Image src="/gift.png" alt='' width={24} height={24} />
          <Link href="/" className='flex flex-col gap-1 text-xs'>
            <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
            <span className='text-gray-500'>See other 16 have upcoming birthdays</span>
          </Link>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Birthdays
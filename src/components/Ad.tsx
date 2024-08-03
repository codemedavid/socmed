import React from 'react'
import Image from 'next/image'
function Ad({size} : {size: "sm" | "md" | "lg"}) {
  return (
    <div className="p-4 flex flex-col gap-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className='flex justify-between'>
        <p className="text-gray-500 text-sm">Sponsored Ads</p>
        <Image width={10} height={10} src='/more.png' alt='' className='w-4 h-4'/>
      </div>
      <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
          <Image src="https://images.pexels.com/photos/24253539/pexels-photo-24253539/free-photo-of-a-bridge-over-a-river-with-a-city-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='rounded-lg object-cover'/>
        </div>
        <div className='flex items-center gap-4'>
          <Image src="https://images.pexels.com/photos/24253539/pexels-photo-24253539/free-photo-of-a-bridge-over-a-river-with-a-city-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=''
          width={24}
          height={24}
          className='rounded-full h-6 w-6 object-cover'
          />
          <span className='text-blue-500 font-medium '>BigChef Dre</span>
        </div>   
          <p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
            {size === "sm" ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit." 
            : size === "md" ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet harum a dolor, aspernatur debitis facilis corrupti quaerat" 
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet harum a dolor, aspernatur debitis facilis corrupti quaerat exercitationem!"}</p>
            <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn More</button>
      </div>
    </div>
  )
}

export default Ad
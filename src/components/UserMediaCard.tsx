import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function UserMediaCard({userId} : {userId :string}) {
  return (
    <div className="p-4 flex flex-col gap-4 bg-white rounded-lg shadow-md text-sm">
    {/* TOP */}
    <div className='flex justify-between'>
      <p className="text-gray-500 text-sm">User Media</p>
      <Link href="/" className="text-blue-500 text-sm">See All</Link>
    </div>
    <div className='flex gap-4 justify-between flex-wrap'>
      <div className='relative w-1/5 h-24'>
        <Image src={"https://images.pexels.com/photos/27288775/pexels-photo-27288775/free-photo-of-a-woman-in-a-black-dress-and-hat-sitting-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
        alt=''
        fill
        className='object-cover rounded-md'
        />
      </div>

      <div className='relative w-1/5 h-24'>
        <Image src={"https://images.pexels.com/photos/27288537/pexels-photo-27288537/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        alt=''
        fill
        className='object-cover rounded-md'
        />
      </div>

      <div className='relative w-1/5 h-24'>
        <Image src={"https://images.pexels.com/photos/27288542/pexels-photo-27288542/free-photo-of-a-palm-tree-is-next-to-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
        alt=''
        fill
        className='object-cover rounded-md'
        />
      </div>

      <div className='relative w-1/5 h-24'>
        <Image src={"https://images.pexels.com/photos/27287739/pexels-photo-27287739/free-photo-of-a-small-house-in-the-middle-of-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
        alt=''
        fill
        className='object-cover rounded-md'
        />
      </div>
      <div className='relative w-1/5 h-24'>
        <Image src={"https://images.pexels.com/photos/27287006/pexels-photo-27287006/free-photo-of-a-cup-of-coffee-with-a-latte-art-on-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
        alt=''
        fill
        className='object-cover rounded-md'
        />
      </div>
      <div className='relative w-1/5 h-24'>
        <Image src={"https://images.pexels.com/photos/27286621/pexels-photo-27286621/free-photo-of-a-group-of-horses-are-drinking-water-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
        alt=''
        fill
        className='object-cover rounded-md'
        />
      </div>

      <div className='relative w-1/5 h-24'>
        <Image src={"https://images.pexels.com/photos/27288537/pexels-photo-27288537/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        alt=''
        fill
        className='object-cover rounded-md'
        />
      </div>

      <div className='relative w-1/5 h-24'>
        <Image src={"https://images.pexels.com/photos/27288542/pexels-photo-27288542/free-photo-of-a-palm-tree-is-next-to-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
        alt=''
        fill
        className='object-cover rounded-md'
        />
      </div>
    </div>
    </div>

  )}
export default UserMediaCard
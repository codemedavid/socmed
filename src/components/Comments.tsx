import Image from 'next/image'
import React from 'react'

function Comments() {
  return (
    <div>
        {/* WRITE */}
        <div className="flex items-center gap-4">
            <Image className='w-8 h-8 rounded-full' src="https://images.pexels.com/photos/20632485/pexels-photo-20632485/free-photo-of-portrait-of-man-in-hat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={32} height={32} />
            <div className='flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                <input type='text' className='bg-transparent outline-none' placeholder='Write a comment....'/>
                <Image className='cursor-pointer' src="/emoji.png" alt="" width={16} height={16} />
            </div>
        </div>
        {/* COMMENTS */}
    <div>
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
            {/* AVATAR */}
            <Image className='w-10 h-10 rounded-full' src="https://images.pexels.com/photos/12613874/pexels-photo-12613874.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={40} height={40} />

            {/* DESC */}
            <div className="flex flex-col gap-2 flex-1">
                <span className="font-medium">Bernice Spencer</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sequi, tempore laboriosam dolores itaque consectetur sed tenetur, perspiciatis facere cupiditate quas reiciendis hic quia animi, iure nesciunt expedita quos incidunt?</p>
                <div className="flex items-center gap-8 mt-2 text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                        <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-300">123 Likes</span>

                    </div>
                    <div>Reply</div>
                </div>
            </div>
            {/* ICON */}
            <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4"/>
        </div>
    </div>
    </div>
  )
}

export default Comments
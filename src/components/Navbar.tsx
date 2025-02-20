"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu'
import { ClerkLoaded, ClerkLoading, SignedIn } from '@clerk/nextjs'
import { SignedOut, UserButton } from '@clerk/clerk-react'
function Navbar() {
  return (
    <div className='h-24 flex items-center justify-between'>
        {/* LEFT */}
        <div className='md:hidden lg:block w-[20%]'>
            <Link href={''} className='font-bold text-xl text-blue-600'>UPSCALE</Link>
        </div>
        {/* CENTER */}
        <div className='hidden md:flex w-[50%] items-center justify-between'>
            {/* LINKS */}
            <div className='flex gap-6 text-gray-600 text-sm'>
                <Link href={""} className='flex items-center gap-2'>
                    <Image src= "/home.png" alt="Homepage" width={16} height={16} className="w-4 h-4"/>
                    <span>Home</span>
                </Link>
                <Link href={""} className='flex items-center gap-2'>
                    <Image src= "/friends.png" alt="Friends" width={16} height={16} className="w-4 h-4"/>
                    <span>Services</span>
                </Link>
                <Link href={""} className='flex items-center gap-2'>
                    <Image src= "/stories.png" alt="Stories" width={16} height={16} className="w-4 h-4"/>
                    <span>Projects</span>
                </Link>
            </div>
            <div className='flex xl:flex p-2 bg-slate-100 items-center rounded-xl'>
                <input type="text" placeholder='search....' className='bg-transparent outline-none' />
                <Image src={"/search.png"} alt='' width={14} height={14}/>
            </div>
        </div>
        {/* RIGHT */}
        <div className='w-[30%] flex justify-end items-center gap-4 xl:gap-8 className="w-4 h-4"'>
            <ClerkLoading>
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
</div>
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    <div className='cursor-pointer'>
                        <Image src={"/people.png"} width={24} height={24} alt=''/>
                    </div>
                    <div className='cursor-pointer'>
                        <Image src={"/messages.png"} width={20} height={20} alt=''/>
                    </div>
                    <div className='cursor-pointer'>
                        <Image src={"/notifications.png"} width={20} height={20} alt=''/>
                    </div>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <div className='hidden lg:flex md:flex items-center gap-2 text-sm '>
                        <Image src={"/people.png"} width={20} height={20} alt=''/>
                        <Link href={'/sign-in'}>Login/Register</Link>
                    </div>
                </SignedOut>
            </ClerkLoaded>
            <MobileMenu />
        </div>
    </div>
  )
}

export default Navbar
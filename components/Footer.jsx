import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div>
            <div className='w-full flex flex-col items-center justify-between mr-[-20px] sm:flex-row sm:justify-between sm:items-center sm:px-8 sm:h-20 bg-gray-800'>
            
            <Image src={assets.logo_light} alt='' className='h-[40px] w-[150px]'></Image>
            <p className='text-lg'>All nrights Reserved</p>
            <div className='flex'>
                <Image src={assets.facebook_icon} alt='' className='h-[40px] w-[40px]'></Image>
                <Image src={assets.twitter_icon} alt='' className='h-[40px] w-[40px]'></Image>
                <Image src={assets.googleplus_icon} alt='' className='h-[40px] w-[40px]'></Image>
            </div>
        </div>
        </div>
    )
}

export default Footer

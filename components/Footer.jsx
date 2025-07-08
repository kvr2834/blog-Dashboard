import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className="w-full bg-gray-800 text-white px-4 py-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row sm:h-20">
                <Image src={assets.logo_light} alt="logo" className="h-[40px] w-[150px]" />
                <p className="text-sm sm:text-base">All rights reserved</p>
                <div className="flex gap-4">
                    <Image src={assets.facebook_icon} alt="Facebook" className="h-8 w-8" />
                    <Image src={assets.twitter_icon} alt="Twitter" className="h-8 w-8" />
                    <Image src={assets.googleplus_icon} alt="Google Plus" className="h-8 w-8" />
                </div>
            </div>
        </div>

    )
}

export default Footer

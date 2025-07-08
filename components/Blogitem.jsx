import React from 'react'
// import { blog_data } from '@/assets/assets'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Link from 'next/link'

function Blogitem({image, title, description, category, id}) {
    return (
        <div className='mx-auto'>
            <div className='text-black w-[280px] border-black border-2 rounded-[5px] my-4 h-[350px]'>
                <Link href={`/blogs/${id}`}>
                <Image src={image} alt='kk' width={100} height={100} className='h-[150px] w-[280px]'></Image>
                </Link>
                <p className='mx-2 my-2 border-black border-2 text-white bg-black rounded-[5px] w-[100px] text-center'>{category}</p>
                <h2 className='mx-auto my-2 px-2'>{title}</h2>
                <p className='px-2 text-xs my-2 line-clamp-3'>{description}</p>
                <Link href={`/blogs/${id}`}>
                <div className='flex gap-2 pl-2 cursor-pointer'>Read more <Image className='w-[20px] h-[15px] mt-1.5' src={assets.arrow} alt=''></Image></div>
                </Link>
            </div>
        </div>
    )
}

export default Blogitem

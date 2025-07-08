import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

function BlogTableItem({ title, author, deleteBlog, mongoId, date }) {
    const BlogDate = new Date(date);
    return (
        <tr className='border-black border-1'>
            <th scope='row' className='items-center gap-3 hidden sm:flex px-6 font-medium text-gray-900 whitespace-nowrap'>
                <Image src={assets.profile_icon} alt='' height={50} widht={150} className='py-4'></Image>
                <p>{author ? author : "No Author"}</p>
            </th>
            <td className='px-6 py-4'>
                {title ? title : "No title "}
            </td>
            <td className='px-6 py-4'>
                {date ? new Date(date).toLocaleDateString('en-IN', { dateStyle: 'long' }) : "No Date"}
            </td>
            <td className='px-6 py-4 cursor-pointer' onClick={() => deleteBlog(mongoId)}>
                X
            </td>
        </tr>
    )
}

export default BlogTableItem

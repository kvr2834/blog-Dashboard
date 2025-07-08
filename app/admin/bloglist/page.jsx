'use client';
import BlogTableItem from '@/components/AdminComponents/BlogTableItem';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Page() {
    const [blogs, setBlogs] = useState([])
    const fetchblog = async () => {
        const response = await axios.get('/api/blog')
        setBlogs(response.data.blogs)
    }
    useEffect(() => {
        fetchblog();
    }, [])

    const deleteBlog = async (mongoId) => {
        const response = await axios.delete('/api/blog', {
            params: {
                id: mongoId
            }
        })

        toast.success(response.data.msg)
        fetchblog()
    }
    return (
        <div className='text-black flex flex-col gap-8 mt-8 px-6'>
            <div>
                <h1 className='text-center'>All Blogs</h1>
            </div>
            <div className='flex items-center justify-center'>
                <table className='border-black border-1 text-sm text-left uppercase w-full lg:w-[1450px]'>
                    <thead>
                        <tr>
                            <th scope='col' className='hidden sm:block py-3 px-6'>Author</th>
                            <th scope='col' className='py-3 px-6'>Title</th>
                            <th scope='col' className='py-3 px-6'>Date Added</th>
                            <th scope='col' className='py-3 px-6'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {blogs ?
                            blogs.map((item, index) => {
                                return <BlogTableItem key={index} title={item.title} author={item.author}  date={item.date}  mongoId={item._id} deleteBlog={deleteBlog} />

                            }) : "No data Available"
                        }
                    </tbody>

                </table>
            </div>


        </div>

    );

}

export default Page

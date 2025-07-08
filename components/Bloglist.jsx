'use client';
import React, { useState, useEffect } from 'react'
// import { blog_data } from '@/assets/assets'
import Blogitem from './Blogitem'
import axios from 'axios';

function Bloglist() {
    const [option, setOption] = useState('All')
    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog')
        setBlogs(response.data.blogs)
        console.log(response.data.blogs)

    }
    useEffect(() => {
        fetchBlogs();
    }, [])

    const filteredBlogs = option === 'All'
        ? blogs
        : blogs.filter((item) => item.category === option)

    return (
        <div className='flex flex-col gap-8'>
            <div className="w-full overflow-x-auto">
                <div className="flex gap-4 items-center px-4 py-2 justify-center sm:justify-center flex-nowrap min-w-max">
                    <button
                        onClick={() => setOption("All")}
                        className="bg-black text-white px-4 py-2 cursor-pointer rounded-[5px] hover:scale-110 transition-all whitespace-nowrap w-auto h-[35px] flex justify-center items-center"
                    >
                        All
                    </button>
                    <button
                        onClick={() => setOption("Startup")}
                        className="bg-black text-white px-4 py-2 cursor-pointer rounded-[5px] hover:scale-110 transition-all whitespace-nowrap w-auto h-[35px] flex justify-center items-center"
                    >
                        Startup
                    </button>
                    <button
                        onClick={() => setOption("Technology")}
                        className="bg-black text-white px-4 py-2 cursor-pointer rounded-[5px] hover:scale-110 transition-all whitespace-nowrap w-auto h-[35px] flex justify-center items-center"
                    >
                        Technology
                    </button>
                    <button
                        onClick={() => setOption("Lifestyle")}
                        className="bg-black text-white px-4 py-2 cursor-pointer rounded-[5px] hover:scale-110 transition-all whitespace-nowrap w-auto h-[35px] flex justify-center items-center"
                    >
                        Lifestyle
                    </button>
                </div>
            </div>

            {filteredBlogs.length === 0 ?
                (<div>No Blogs Found for {option}</div>) :
                (<div className='flex flex-wrap gap-6 mx-6'>
                    {filteredBlogs ? filteredBlogs.map((item, index) => {
                        return (
                            <Blogitem
                                id={item._id}
                                key={index}
                                title={item.title}
                                category={item.category}
                                image={item.image}
                                description={item.description}
                                author={item.author}
                            />
                        );
                    }) : "Loading"}

                </div>
                )}


        </div>
    )








}

export default Bloglist

'use client';

import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

export default function Page() {
    const [data, setData] = useState(null);
    const { id } = useParams(); // ✅ Safe way to get dynamic route param in client


    const fetchBlog = async () => {
        try {
            const response = await axios.get('/api/blog', {
                params: { id }
            });
            setData(response.data.blog);
        } catch (error) {
            console.error('Error fetching blog:', error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchBlog();
        }
    }, [id]);


    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data]);

    return (
        <div>
            <div className="py-5 px-5 md:px-12 lg:px-28 bg-gray-400 h-[500px]">
                <div className="flex justify-between items-center">
                    <Image
                        src={assets.logo}
                        alt="Blogger Logo"
                        width={180}
                        height={60}
                        className="w-[130px] sm:w-[150px] md:w-[160px] lg:w-[180px] object-contain"
                    />
                    <button className="bg-black text-white h-10 py-2 px-4 cursor-pointer rounded-[5px]">
                        Get started
                    </button>
                </div>

                <div className='mt-12 flex flex-col gap-4'>
                    <h1 className='text-5xl text-center'>
                        {data ? data.title : 'Loading...'}
                    </h1>
                    <div className='flex flex-col items-center gap-4'>
                        {data?.author_img && (
                            <Image
                                src={data.author_img}
                                alt={data.author}
                                width={80}
                                height={80}
                                className="rounded-full"
                            />
                        )}
                        <p className='text-lg text-center'>
                            {data?.author || ''}
                        </p>
                    </div>
                </div>
            </div>

            <div className='pt-4 flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-4 text-black px-8 w-[550px] sm:w-[800px] my-8 '>
                    {data?.image && (
                        <Image
                            src={data.image}
                            alt={data?.title || 'Blog image'}
                            width={800}
                            height={400}
                            className='w-[450px] sm:w-[600px] md:w-[800px] mt-[-200px]'
                        />
                    )}
                    <p className='text-lg text-center md:text-2xl sm:text-2xl'>
                        {data?.description || ''}
                    </p>
                </div>
            </div>
        </div>
    );
}

'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Page() {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        title: '',
        author: 'Anonymous',
        authorImg: assets.profile_icon,
        description: '',
        category: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const submitHandler = async (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    formData.append('description', data.description);
    formData.append('category', data.category);

    try {
        const response = await axios.post('/api/blog', formData);
        if (response.data.success) {
            toast.success(response.data.msg || 'Blog submitted!');
        } else {
            toast.error('Error submitting blog');
        }
    } catch (err) {
        toast.error('Something went wrong');
        console.error(err);
    }
};


    return (
        <form
            onSubmit={submitHandler}
            className='flex flex-col gap-8 px-8  text-black items-center w-full'
        >
            <ToastContainer theme='dark' />
            <label htmlFor='image'>
                <div className='flex-col items-center'>
                    <p className='mb-2 mt-[-20px]'>Upload Thumbnail : </p>
                <Image
                    src={image ? URL.createObjectURL(image) : assets.upload_area}
                    alt='Upload Thumbnail'
                    width={200}
                    height={100}
                    className='h-auto w-[200px]'
                />
                </div>
            </label>

            <div className='flex gap-4 flex-col w-full mx-auto'>
                <p>Title:</p>
                <input
                    type='text'
                    name='title'
                    value={data.title}
                    onChange={handleChange}
                    placeholder='Enter title'
                    className='w-full border border-black h-[35px] rounded-[5px] pl-4'
                />
            </div>

            <div className='flex gap-4 flex-col w-full mx-auto'>
                <p>Description:</p>
                <textarea
                    name='description'
                    value={data.description}
                    onChange={handleChange}
                    placeholder='Enter Description'
                    className='w-full border border-black h-[200px] rounded-[5px] pl-4 pt-1'
                />
            </div>

            <div className='flex flex-col gap-4 sm:flex sm:gap-4 sm:flex-row justify-center items-center w-screen px-4'>
                <div className='flex items-center ml-[-50px] sm:ml-0'>
                    <p>Category:</p>
                    <select
                        name='category'
                        value={data.category}
                        onChange={handleChange}
                        className='w-[200px] h-[40px] border border-black rounded-[5px]'
                    >
                        <option value='' disabled>
                            -- Select Category --
                        </option>
                        <option value='Technology'>Technology</option>
                        <option value='Startup'>Startup</option>
                        <option value='Travel'>Travel</option>
                    </select>
                </div>
                <button
                    type='submit'
                    className='text-black border border-black w-[120px] rounded-[5px] cursor-pointer py-2 hover:bg-black hover:text-white'
                >
                    Submit
                </button>
            </div>

        </form>
    );
}

export default Page;

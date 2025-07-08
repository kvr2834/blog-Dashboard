'use client';
import { assets } from "@/assets/assets"
import Image from "next/image"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"


function Header() {
    const[email, setEmail] = useState('')
    const submitHandler = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email)
        const response = await axios.post('/api/email', formData)
        if(response.data.success){
            toast.success(response.data.msg)
            setEmail("")
        }
        else{
            toast.error("Error")
        }
    }
    return (
        <div className="py-5 px-5 md:px-12 lg:px-28">
            <div className="flex justify-between items-center">
                <Image
                    src={assets.logo}
                    alt="Blogger"
                    width={0}
                    className="w-[130px] sm:w-[150px] md:w-[160px] lg:w-[180px] object-contain"
                />
                <button className="bg-black text-white h-10 w-22 py-2 px-1 sm:w-28 md:w-30 cursor-pointer rounded-[5px]">
                    Get started
                </button>
            </div>
            <div className="text-center flex flex-col gap-8 my-8 mx-4">
                <h1 className="text-2xl font-medium text-black sm:text-3xl">Latest Blogs</h1>
                <p className="text-black text-xs sm:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, architecto, quae cupiditate itaque quisquam blanditiis dolores quod incidunt a error, veritatis eaque aspernatur nisi et tempore perferendis debitis quo nam.</p>
                <form onSubmit={submitHandler} className="flex w-full h-auto border-black rounded-[5px] text-black mx-auto my-2 border-2 justify-between" action="">
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className="px-1 outline-none" type="email" placeholder="Enter Your Email" id="" />
                    <button type='submit' className="bg-black text-xs text-whiten h-[30px] ml-[-29px] sm:w-[130px] sm:h-[40px] text-white cursor-pointer active:bg-white active:text-black">Subscribe</button>    
                </form>            
            </div>
        </div>
    )
}

export default Header

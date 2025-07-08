import { assets } from '@/assets/assets'
import Sidebar from '@/components/AdminComponents/Sidebar'
import React from 'react'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Layout({ children }) {
    return (
        <>
            <div className="flex w-full text-black min-h-screen">
                <ToastContainer theme="dark" />
                <Sidebar />

                <div className="flex flex-col w-full">
                    <div className="w-full flex justify-between items-center px-4 py-4 h-[70px] border-b border-black">
                        <h2 className="pl-12 text-2xl font-semibold">Admin Panel</h2>
                        <Image
                            className="h-[50px] w-[50px] rounded-full"
                            src={assets.profile_icon}
                            alt="Profile Icon"
                        />
                    </div>
                    <div className="p-4 w-full">{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout

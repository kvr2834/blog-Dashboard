'use client';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    if (window.innerWidth < 768) setIsOpen(false);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const getSidebarWidth = () => {
    if (screenWidth < 640) return 'w-[220px]';
    if (screenWidth < 768) return 'w-[260px]';
    if (screenWidth < 1024) return 'w-[300px]';
    return 'w-[350px]';
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 bg-black text-white px-3 py-2 rounded-md"
      >
        {isOpen ? '✖' : '☰'}
      </button>

      <div
        className={`bg-slate-200 text-black h-screen fixed z-40 top-0 left-0 transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${getSidebarWidth()}`}
      >
        <div className="h-[12vh] border-b border-black px-2 flex justify-center items-center">
          <Image src={assets.logo} width={160} alt="logo" />
        </div>

        <div className="h-[88vh] text-lg sm:text-xl lg:text-2xl flex flex-col items-center gap-4 pt-4">
          <div className="hover:bg-gray-400 rounded-md w-full py-2 text-center">
            <Link href="/admin/addproduct" className="flex gap-2 items-center justify-center">
              <p>Add Blog</p>
              <p className="text-2xl">+</p>
            </Link>
          </div>

          <div className="hover:bg-gray-400 rounded-md w-full py-2 text-center">
            <Link href="/admin/bloglist" className="flex gap-2 items-center justify-center">
              <p>Edit Blog</p>
              <Image src={assets.blog_icon} width={25} alt="" />
            </Link>
          </div>

          <div className="hover:bg-gray-400 rounded-md w-full py-2 text-center">
            <Link href="/admin/subscriptions" className="flex gap-2 items-center justify-center">
              <p>Subscription</p>
              <Image src={assets.email_icon} width={25} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

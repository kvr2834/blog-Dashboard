'use client';
import Blogitem from "@/components/Blogitem";
import Bloglist from "@/components/Bloglist";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer theme="dark" />
      <Header />
      <div className="flex-grow">
        <Bloglist />
      </div>
      <Footer />
    </div>

  );
}

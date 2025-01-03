
"use client"
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
   
      <div className="bg-black flex justify-between items-center border-b-2 border-b-white px-4">

        <Image
          className="pl-3"
          src="/logo.png"
          alt="logo"
          height={80}
          width={80}
        />

 
        <div className="hidden md:flex">
          <ul className="flex space-x-5 text-white items-center pt-6">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/aboutPage"}>
              <li>About</li>
            </Link>
           
           
            <Link href={"/"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>

      
        <div className="flex space-x-3 text-white items-center">
          <Link href={"/"}>
            <ShoppingCart size={28} />
          </Link>
          <Link href={"/"}>
            <Search size={28} />
          </Link>

  
          <button
            className="md:hidden text-white"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

   
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          <X size={28} />
        </button>
        <ul className="mt-16 space-y-5 px-6">
          <Link href={"/"}>
            <li onClick={toggleSidebar}>Home</li>
          </Link>
          <Link href={"/aboutpage"}>
            <li onClick={toggleSidebar}>About</li>
          </Link>
          <Link href={"/"}>
            <li onClick={toggleSidebar}>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
}



import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black text-white text-center  pt-2">
      <hr />
      <br />
      
      <div className="flex flex-wrap justify-center space-x-4 space-y-4 sm:space-y-0 sm:space-x-6">
        <Link
          className="p-3 sm:p-5 rounded-full border-2 border-white flex items-center justify-center"
          href={"/"}
        >
          <Facebook />
        </Link>
        <Link
          className="p-3 sm:p-5 rounded-full border-2 border-white flex items-center justify-center"
          href={"/"}
        >
          <Twitter />
        </Link>
        <Link
          className="p-3 sm:p-5 rounded-full border-2  border-white flex items-center justify-center"
          href={"/"}
        >
          <Instagram />
        </Link>
        <Link
          className="p-3 sm:p-5 rounded-full border-2 border-white flex items-center justify-center"
          href={"/"}
        >
          <Linkedin />
        </Link>
        <Link
          className="p-3 sm:p-5 rounded-full border-2 border-white flex items-center justify-center"
          href={"/"}
        >
          <Github />
        </Link>
      </div>

      
      <h1 className="mt-4 text-sm sm:text-base">
        Created by <span className="text-[#D3AD7F]">Javeria</span> | All Rights Reserved.
      </h1>
    </div>
  );
}



import Image from "next/image";

export default function Header() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/coffee.png"
        alt="Main"
        height={300} 
        width={300} 
      
     className=" object-cover h-screen w-full " 
        />
      
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-24 text-white z-10">
        <h1 className="text-3xl md:text-7xl font-bold mb-4 max-w-lg leading-tight">
          FRESH COFFEE IN <br /> THE MORNING
        </h1>
        <p className="text-sm md:text-lg mb-6 max-w-md leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <button className="px-6 py-2 bg-[#ecbe88] text-black hover:bg-[#f7cfa1] font-medium rounded">
          Get It Now
        </button>
      </div>
      </div>
    
  );
}





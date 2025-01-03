




import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="text-white bg-black">
  
      <div>
        <Image
          src="/coffeee.png"
          alt="Coffee Cup"
          height={500}
          width={500}
          className="w-full h-72 object-cover "
        />
      </div>

      
      <div className="text-center px-6 md:px-36 py-8">
        <h1 className="text-3xl font-bold">About Us</h1>
        <h2 className="text-xl md:text-3xl font-serif italic py-5 ">
          At Coffee, we are not just passionate about coffee – we are obsessed. Our journey began with a simple goal: to craft the perfect cup that would delight your senses and leave you wanting more.
        </h2>
      </div>

     
      <div className="flex flex-col md:flex-row md:space-x-6 p-6 md:p-12">
        
        <div className="flex flex-col items-center text-center md:text-left space-y-4">
          <p>
            At Java Bliss, we believe every cup of coffee tells a story. Our journey started with a love for exceptional brews and a passion for bringing people together.
          </p>
          <Image
            src="/ab.png"
            alt="About Image 1"
            height={400}
            width={400}
            className="rounded-lg  sm:mb-3"
          />
        </div>

       
        <div className="flex flex-col items-center text-center md:text-left space-y-4">
          <Image
            src="/ac.png"
            alt="About Image 2"
            height={400}
            width={400}
            className="rounded-lg"
          />
          <p className=' sm:mb-3'>
            At Java Bliss, we believe every cup of coffee tells a story. Our journey started with a love for exceptional brews and a passion for bringing people together.
          </p>
        </div>

       
        <div className="flex flex-col items-center text-center md:text-left space-y-4">
          <p>
            At Java Bliss, we believe every cup of coffee tells a story. Our journey started with a love for exceptional brews and a passion for bringing people together.
          </p>
          <Image
            src="/ae.png"
            alt="About Image 3"
            height={400}
            width={400}
            className="rounded-lg  sm:mb-9"
          />
        </div>
      </div>
    </div>
  );
}


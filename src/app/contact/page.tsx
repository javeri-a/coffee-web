import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-[#D3AD7F]">CONTACT</span> US
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="w-full h-64 md:h-96">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5263235.767833964!2d62.42580701105965!3d30.375320207660758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922691a61e2be07%3A0xb122c6c9877c62c!2sPakistan!5e0!3m2!1sen!2s!4v1701514931627!5m2!1sen!2s"
  className="w-full h-full rounded-lg"
  loading="lazy"
></iframe>

          </div>

         
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">GET IN TOUCH</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-[#D3AD7F]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-[#D3AD7F]"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full p-3 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-[#D3AD7F]"
              />
              <button
                type="submit"
                className="w-full bg-[#D3AD7F] text-black py-3 rounded  transition duration-300"
              >
                Contact Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default ContactUs;

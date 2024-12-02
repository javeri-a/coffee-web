import Image from "next/image";
import React from "react";

const LatestProducts = () => {
  const products = [
    {
      id: 1,
      name: "Peru Coffee",
      price: "₹100.00",
      image: "/lp1.png", 
    },
    {
      id: 2,
      name: "Columbian Coffee",
      price: "₹100.00",
      image: "/lp2.png",
    },
    {
      id: 3,
      name: "Nicaragua Coffee",
      price: "₹100.00",
      image: "/lp3.png",
    },
  ];

  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-[#D3AD7F]">LATEST</span> PRODUCTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black border  rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-[#D3AD7F] font-bold">{product.price}</p>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-[#D3AD7F] text-black px-4 py-2 rounded ">
                  Add to Cart
                </button>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-white">
                    ♥
                  </button>
                  <button className="text-gray-400 hover:text-white">💾</button>
                  <button className="text-gray-400 hover:text-white">🛒</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;




"use client";
import { client } from '@/sanity/lib/client';
import { Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Product {
  _id: string;
  title: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
}

const Latest = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch products from Sanity
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        image{
          asset->{
            _id,
            url
          }
        }
      }`;

      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-[#D3AD7F]">LATEST</span> PRODUCTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-black border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300"
            >
              <Link href={`dynamic/${product._id}`}>
                <Image
                  src={product.image.asset.url}
                  alt={product.title}
                  width={150}
                  height={150}
                  className="w-full h-64 object-cover rounded-md"
                />
              </Link>

              <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
              <p className="text-[#D3AD7F] font-bold">${product.price}</p>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-[#D3AD7F] text-black px-4 py-2 rounded">  <Link href="/addtocart">
                  Add to Cart
                  </Link>
                </button>
                <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-white">  <Heart size={24}/> </button> 
                 
                 
                  <button className="text-gray-400 hover:text-white"> <Link href="/addtocart"><ShoppingCart size={24} /></Link></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latest;

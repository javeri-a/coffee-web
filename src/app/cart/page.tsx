"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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

const P: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-[#D3AD7F]">LATEST</span> PRODUCTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-black border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300"
            >
              <Image
                src={product.image.asset.url}
                alt={product.title}
                width={150}
                height={150}
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
              <p className="text-[#D3AD7F] font-bold">${product.price}</p>
              <button
                className="bg-[#D3AD7F] text-black px-4 py-2 rounded mt-4"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-[#D3AD7F]">YOUR</span> CART
        </h2>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="bg-black border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300"
              >
                <Image
                  src={item.image.asset.url}
                  alt={item.title}
                  
                  className="w-full h-64 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
                <p className="text-[#D3AD7F] font-bold">${item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>

  );
};

export default P;

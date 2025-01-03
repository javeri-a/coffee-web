
'use client';

import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Latest from '@/app/Latest/page';

interface Product {
  title: string;
  price: number;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
}

const ProductDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const query = `*[_type == "product" && _id == $id][0]{
          title,
          price,
          description,
          image {
            asset-> {
              url
            }
          }
        }`;

        const fetchedProduct = await client.fetch(query, { id });
        setProduct(fetchedProduct);
        setLoading(false);
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center text-white">Product not found!</p>;
  }

  return (
    <section className="bg-gray-900 text-white py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full max-w-md">
            <Image
              src={product.image.asset.url}
              alt={product.title}
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold mb-4 text-[#D3AD7F]">{product.title}</h1>
            <p className="text-2xl font-semibold text-[#FFD700] mb-6">${product.price}</p>
            <p className="text-gray-300 leading-relaxed mb-8">{product.description}</p>
            <p>Rich and aromatic coffee crafted from premium roasted beans, delivering a perfect balance of bold flavor and smooth taste. Ideal for energizing mornings or relaxing moments, one sip awakens your senses and fuels your day.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-3">
              <button className="bg-[#D3AD7F] hover:bg-[#C09C6F] text-black font-medium px-6 py-3 rounded-lg transition duration-300">
              <Link href="/addtocart">
                Add to Cart
                </Link>
              </button>
              <button className="bg-transparent border border-[#D3AD7F] text-[#D3AD7F] hover:bg-[#D3AD7F] hover:text-black px-6 py-3 rounded-lg transition duration-300">
                <Link href="/addtocart">
                Buy Now
                </Link>
              </button>
            </div>
          </div>
        </div>
        <Latest/>
      </div>
    </section>
  );
};

export default ProductDetail;

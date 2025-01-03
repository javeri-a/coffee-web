
'use client';

import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MenuItem {
  title: string;
  price: number;
  picture: {
    asset: {
      url: string;
    };
  };
}

const MenuDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  if (!params?.id) {
    return <p className="text-center text-white">Invalid route parameter!</p>;
  }

  const { id } = params;
  const [menuItem, setMenuItem] = useState<MenuItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMenuItem = async () => {
      const query = `*[_type == "menu" && _id == $id][0]{
        title,
        price,
        picture {
          asset-> {
            url
          }
        }
      }`;

      try {
        const fetchedMenuItem = await client.fetch(query, { id });
        setMenuItem(fetchedMenuItem);
      } catch (error) {
        console.error('Error fetching menu item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItem();
  }, [id]);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  if (!menuItem) {
    return <p className="text-center text-white">Menu item not found!</p>;
  }

  return (
    <section className="bg-gray-900 text-white py-10 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div>
            <Image
              src={menuItem.picture.asset.url}
              alt={menuItem.title}
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-[#D3AD7F]">{menuItem.title}</h1>
            <p className="text-[#FFD700] text-2xl font-semibold my-4">${menuItem.price}</p>
            <button className="mt-4 bg-[#D3AD7F] text-black px-6 py-3 rounded-md hover:bg-[#C09C6F] transition duration-300">
              <Link href="/addtocart">
              Order Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuDetail;


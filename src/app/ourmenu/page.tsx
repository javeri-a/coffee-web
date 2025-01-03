'use client';

import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Menu {
  _id: string;
  title: string;
  price: number;
  picture: {
    asset: {
      url: string;
    };
  };
}

const MenuListing: React.FC = () => {
  const [menuItems, setMenuItems] = useState<Menu[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch menu items from Sanity
    const fetchMenuItems = async () => {
      const query = `*[_type == "menu"]{
        _id,
        title,
        price,
        picture {
          asset->{
            url
          }
        }
      }`;

      const fetchedMenuItems = await client.fetch(query);
      setMenuItems(fetchedMenuItems);
      setLoading(false);
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return <p className="text-white text-center">Loading...</p>;
  }

  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-[#D3AD7F]">Our</span> Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 text-center">
          {menuItems.map((item) => (
            <div
              key={item._id}
              className="bg-black border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300"
            >
              <Link href={`/menu/${item._id}`}>
                <Image
                  src={item.picture.asset.url}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="w-full h-48 object-cover rounded-md"
                />
              </Link>
              <h3 className="text-xl p-1 font-semibold mt-4">{item.title}</h3>
              <p className="text-[#D3AD7F] font-bold text-lg p-1">${item.price}</p>
              <button className="bg-[#D3AD7F] text-black px-4 py-2 rounded">
              <Link href="/addtocart"> Add to Cart</Link>
                </button>
               
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuListing;

"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ourmenu } from "@/sanity/lib/query";
import { menu } from "@/types/menu";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "../utils/cart";
import Swal from "sweetalert2"

const Menu = () => {
  const [menuItems, setMenuItems] = useState<menu[]>([]);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const fetchedMenu: menu[] = await client.fetch(ourmenu);
        setMenuItems(fetchedMenu || []);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setMenuItems([]);
      }
    }

    fetchMenu();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, item: menu) => {
    e.preventDefault()
  Swal.fire({
      position : "top-start",
      icon : "success",
      title : `${item.name} added to cart`
    })
    addToCart(item);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Food Menu</h1>
      {menuItems && menuItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <div
              key={item._id}
              className="food-item p-4 border rounded-lg hover:scale-105 transition-transform duration-200"
            >
              <Link href={item.slug?.current ? `/item/${item.slug.current}` : "#"}>
                {/* Main Image */}
                {item.image && (
                  <div className="mb-4">
                    <div className="relative w-full h-40">
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg border"
                      />
                    </div>
                  </div>
                )}
                {/* Additional Images */}
                {item.additionalImages && item.additionalImages.length > 0 && (
                  <div className="flex space-x-2 overflow-x-auto mb-4">
                    {item.additionalImages.map((img, index) => (
                      <div key={index} className="relative w-24 h-24">
                        <Image
                          src={urlFor(img).url()}
                          alt={`Additional Image ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg border"
                        />
                      </div>
                    ))}
                  </div>
                )}
                {/* Food Details */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <p className="text-lg font-semibold text-gray-600">
                    Price: ${item.price}
                  </p>
                  <button
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                    onClick={(e) => handleAddToCart(e, item)}
                  >
                    Add To Cart
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p>No menu items available.</p>
        </div>
      )}
    </div>
  );
};

export default Menu;

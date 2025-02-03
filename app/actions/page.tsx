// /app/actions/page.tsx

'use client'; // Make sure the code runs client-side (since you're using localStorage)

import React, { useState, useEffect } from 'react';
import { addToCart } from '../utils/cart';  // Import the addToCart function
import { menu } from "@/types/menu";  // Import the menu type

const Page = () => {
  const [cartItems, setCartItems] = useState<number>(0); // To track cart item count

  // Example menu item (replace this with actual dynamic data or API)
  const exampleMenuItem: menu = {
      _id: '123',
      name: 'Pizza',
      price: 12.99,
      inventory: 1,
      _type: 'food',
      slug: {
          current: undefined,
          _type: 'slug'
      }
  };

  // Function to handle adding item to cart
  const handleAddToCart = (menuItem: menu) => {
    addToCart(menuItem);  // Call the utility function to add the item to the cart
    setCartItems(prevItems => prevItems + 1);  // Update the cart item count
  };

  // Fetch current cart items count from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart.length);  // Set the cart item count from localStorage
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <div>
        <p>{exampleMenuItem.name}</p>
        <p>${exampleMenuItem.price}</p>
        <button onClick={() => handleAddToCart(exampleMenuItem)}>Add to Cart</button>
      </div>

      <div>
        <h2>Items in Cart: {cartItems}</h2>
      </div>
    </div>
  );
};

export default Page;  // Export the page component

"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';  // Importing useRouter for navigation

const ShoppingCart: React.FC = () => {
  const initialCartItems = [
    { name: "Burger", price: 10.99, quantity: 2, image: "/product_img.png" },
    { name: "Fresh Lime", price: 3.49, quantity: 1, image: "/Group 68.png" },
    { name: "Pizza", price: 9.99, quantity: 4, image: "/product_img (2).png" },
    { name: "Chocolate Muffin", price: 4.49, quantity: 1, image: "/product_img (1).png" },
    { name: "Cheese Butter", price: 11.99, quantity: 3, image: "/Grand Italiano.png" },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  
  const router = useRouter();  // Hook for routing

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once removed, you won\'t be able to add this item again!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        setCartItems(cartItems.filter((_, i) => i !== index));
      }
    });
  };

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
    }
  };

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCharges = 10.0; // Shipping charges
  const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges;

  // Updated Checkout Handler
  const handleCheckout = () => {
    Swal.fire({
      title: 'Confirm your order',
      text: 'Please confirm your order details before proceeding to checkout.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Proceed to Checkout',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with the checkout (redirect to /checkout)
        router.push('/Checkout');
      } else {
        // If the user cancels, display a message
        Swal.fire('Cancelled', 'Your order was not processed.', 'error');
      }
    });
  };

  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <header className="bg-black shadow-md">
        <div className="container mx-auto flex justify-between items-center py-2 px-4 sm:px-6">
          <div className="text-sm font-bold">
            <Link href="/" className="flex items-center">
              <span className="text-white">FOOD</span>
              <span className="text-yellow-400">TUCK</span>
            </Link>
          </div>

          <nav className="flex gap-2 text-xs sm:text-sm font-medium justify-center items-center">
            <Link href="/" className="text-white hover:text-yellow-400 transition">Home</Link>
            <Link href="/Menu" className="text-white hover:text-yellow-400 transition">Menu</Link>
            <Link href="/Blog" className="text-white hover:text-yellow-400 transition">Blog</Link>
            <Link href="/Page" className="text-white hover:text-yellow-400 transition">Page</Link>
            <Link href="/About" className="text-white hover:text-yellow-400 transition">About</Link>
            <Link href="/Cart" className="text-white hover:text-yellow-400 transition">Cart</Link>
            <Link href="/Contact" className="text-white hover:text-yellow-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Section with Background Image */}
      <div
        className="bg-cover bg-center h-[120px] flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: "url('/unsplash_4ycv3Ky1ZZU.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl font-semibold">Shopping Cart</h1>
      </div>

      {/* Main Shopping Cart Section */}
      <main className="py-6 px-3 sm:px-6 md:px-10 lg:px-14">
        <table className="w-full border-collapse text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 font-semibold">Product</th>
              <th className="p-2 font-semibold">Price</th>
              <th className="p-2 font-semibold">Quantity</th>
              <th className="p-2 font-semibold">Total</th>
              <th className="p-2 font-semibold">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48} // Adjust the width
                    height={48} // Adjust the height
                    className="object-cover rounded mr-2 sm:mr-4"
                  />
                  <span>{item.name}</span>
                </td>
                <td className="p-2">${item.price.toFixed(2)}</td>
                <td className="p-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value) || 0)
                    }
                    className="w-12 border rounded px-1 text-center"
                    min="0"
                  />
                </td>
                <td className="p-2">${(item.price * item.quantity).toFixed(2)}</td>
                <td
                  className="p-2 text-red-500 cursor-pointer"
                  onClick={() => handleRemoveItem(index)}
                >
                  &times;
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Coupon Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-7">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-sm sm:text-lg font-semibold mb-2">Coupon Code</h2>
            <div className="flex items-center">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter your code"
                className="flex-grow border rounded-l px-2 py-1 text-sm sm:text-base"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-orange-500 text-white px-4 sm:px-6 py-1 rounded-r text-sm sm:text-base"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
              <div className="flex justify-between mb-2 text-sm sm:text-base">
                <span>Cart Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm sm:text-base">
                <span>Discount</span>
                <span>${(cartSubtotal * discount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm sm:text-base">
                <span>Shipping Charges</span>
                <span>${shippingCharges.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-sm sm:text-lg">
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-orange-500 text-white mt-4 py-2 sm:py-3 rounded text-sm sm:text-base font-semibold"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;

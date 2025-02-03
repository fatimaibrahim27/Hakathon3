
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white text-xs sm:text-sm">
      {/* Banner */}
      <div
        className="bg-cover bg-center h-[70px] sm:h-[100px] p-[18px] flex flex-col justify-center items-center text-white relative"
        style={{
          backgroundImage: 'url("/unsplash_4ycv3Ky1ZZU.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-lg sm:text-xl font-bold">Checkout Page</h1>
        <p className="mt-1 text-xs sm:text-sm">Check orders</p>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {/* Left Column - Forms */}
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-3">Shipping Address</h2>
              {/* Form fields */}
              <div className="grid gap-2">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-gray-700 mb-1">First name</label>
                    <input type="text" id="firstName" className="w-full px-2 py-1 border border-gray-300 rounded-md focus:ring-orange-500" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium text-gray-700 mb-1">Last name</label>
                    <input type="text" id="lastName" className="w-full px-2 py-1 border border-gray-300 rounded-md focus:ring-orange-500" />
                  </div>
                </div>

                {/* Email & Phone Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email address</label>
                    <input type="email" id="email" className="w-full px-2 py-1 border border-gray-300 rounded-md focus:ring-orange-500" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">Phone number</label>
                    <input type="tel" id="phone" className="w-full px-2 py-1 border border-gray-300 rounded-md focus:ring-orange-500" />
                  </div>
                </div>

                {/* Address Fields */}
                <div>
                  <label htmlFor="address1" className="block text-xs font-medium text-gray-700 mb-1">Address 1</label>
                  <input type="text" id="address1" className="w-full px-2 py-1 border border-gray-300 rounded-md focus:ring-orange-500" />
                </div>
                <div>
                  <label htmlFor="address2" className="block text-xs font-medium text-gray-700 mb-1">Address 2</label>
                  <input type="text" id="address2" className="w-full px-2 py-1 border border-gray-300 rounded-md focus:ring-orange-500" />
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Billing Address</h2>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="sameAsShipping" className="h-4 w-4 text-orange-500 rounded focus:ring-orange-500" />
                <label htmlFor="sameAsShipping" className="text-xs text-gray-700">Same as shipping address</label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button className="py-1 px-4 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-orange-500">
                Back to cart
              </button>
              <button className="py-1 px-4 bg-orange-500 text-white rounded-md shadow-sm text-xs font-medium hover:bg-orange-600 focus:ring-2 focus:ring-orange-500">
                Proceed to shipping
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="p-4 rounded-lg border-2 border-gray-300">
            <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
            {/* Items */}
            <div className="space-y-3">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <div className="relative h-12 w-12">
                    <Image src="/unsplash_ZuIDLSz3XLg.png" alt="Item image" fill className="rounded-md object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-xs">Chicken chiowmen</h3>
                    <p className="text-xs text-gray-500">$150</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-1 border-t pt-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">$130</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">$54.76</span>
              </div>
              <div className="flex justify-between border-t pt-2 text-sm">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$432.65</span>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded-md shadow-sm text-xs font-medium hover:bg-orange-600 focus:ring-2 focus:ring-orange-500">
              Place an order
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <h4 className="font-bold mb-1">About Us</h4>
            <p>Reliable services for clients and leisure travelers.</p>
          </div>
          <div>
            <h4 className="font-bold mb-1">Links</h4>
            <ul>
              <li><Link href="/About">About</Link></li>
              <li><Link href="/menu">Menu</Link></li>
            </ul>
          </div>
          <p className="text-center sm:col-span-2 mt-4 text-xs">© 2024 FoodTuck. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
// 'use client'
// import { menu } from '@/types/menu';
// import React, {useState} from 'react';


// const Checkout = ()  => {
//   const [cartItems, setCartItems] = useState<menu[]>([])
// const [discount, setDiscount] = useState<number>(0)
// const [formValues, setFormulaValues] = useState({
//   firstName:"",
//   lastName:"",
//   email:"",
//   address:"",
//   zipCode:"",
//   city:"",
// })
//  const [formErrors, setErrors] = useState({
//   firstName:"",
//   lastName:"",
//   email:"",
//   address:"",
//   zipCode:"",
//   city:"",

//  })
//   return (
//   <div></div>
//   )
// }
// export default Checkout

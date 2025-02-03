'use client';
import Image from 'next/image'; // Import Image for optimization
import React from 'react';

export default function Hero() {
  // Event handlers for buttons
  const handleShowMoreClick = () => {
    alert('Show More button clicked!');
  };

  const handlePlaceOrderClick = () => {
    alert('Place Order button clicked!');
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Removed Header Section */}
      {/* Main Section */}
      <main className="flex flex-wrap sm:flex-nowrap items-center justify-between py-10 px-4 sm:px-6">
        {/* Left Content */}
        <div className="w-full sm:w-1/2">
          <h3 className="text-yellow-500 font-sans">It&apos;s Quick &amp; Amusing</h3>
          <h1 className="text-white font-bold sm:text-3xl lg:text-5xl mt-2">
            <span className="text-yellow-400">The</span> Art of Speed
          </h1>
          <h2 className="text-white font-bold sm:text-3xl lg:text-5xl mt-4">Food Quality</h2>
          <p className="text-gray-300 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere voluptatum tempore massa conque.
          </p>
          <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded-full mt-6 hover:bg-yellow-400 transition">
            See Menu
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image
            src="/Group 68.png"
            alt="Plate of Food"
            width={400}
            height={400}
            className="w-auto h-auto shadow-lg"
          />
        </div>
      </main>

      {/* Bottom Section */}
      <section className="flex flex-wrap sm:flex-nowrap justify-between items-center px-4 sm:px-6 py-12">
        {/* Left Image */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image
            src="/unsplash_fdlZBWIP0aM.png"
            alt="Delicious Food"
            width={400}
            height={400}
            className="w-auto h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full sm:w-1/2 text-right">
          <h5 className="text-green-500 italic">Healthy &amp; Juicy Food</h5>
          <h1 className="text-lg sm:text-xl font-bold text-white mt-4">
            We create the best quality food products
          </h1>
          <p className="text-gray-300 mt-4 italic">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.&quot;
          </p>
          <button className="bg-green-800 text-white font-bold py-2 px-6 rounded mt-6 hover:bg-green-600 transition">
            Show More
          </button>
        </div>
      </section>

      {/* New Hero Section (After the Original Hero) */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-8">
        {/* Text Section */}
        <div className="flex flex-col items-start text-left max-w-sm">
          {/* Title */}
          <h5 className="text-yellow-300-600 font-serif text-sm sm:text-base">
            <i>Healthy &amp; Juicy Food</i>
          </h5>
          <h1 className="font-extrabold text-lg sm:text-xl text-white leading-tight">
            Enjoy Healthy Life
            <br />
            &amp; Tasty Food
          </h1>

          {/* Subtitle */}
          <h6 className="text-xs sm:text-sm font-thin text-gray-800z mt-2 italic">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            <br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.&quot;
          </h6>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            {/* Show More Button */}
            <button
              onClick={handleShowMoreClick}
              className="px-3 py-1 bg-green-800 text-white text-xs sm:text-sm rounded-md hover:bg-green-600 transition duration-300"
            >
              Show More
            </button>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrderClick}
              className="px-3 py-1 border border-green-800 text-green-500 text-xs sm:text-sm rounded-md hover:bg-green-100 transition duration-300"
            >
              Place Order
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 mt-6 sm:mt-0 sm:ml-8 w-full sm:w-1/2">
          <Image
            src="/main.jpg"  // Make sure this path is correct
            alt="Delicious Food"
            className="w-full h-auto object-cover rounded-lg"
            width={500}   // Add width for optimization
            height={400}  // Add height for optimization
          />
        </div>
      </div>
    </div>
  );
}

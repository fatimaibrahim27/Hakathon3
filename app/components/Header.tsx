'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemCount] = useState(3); // Only use the cartItemCount state, no need for setter
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 sm:px-6">
        {/* Logo */}
        <div className="text-xs font-bold">
          <Link href="/" className="flex items-center">
            <span className="text-white">FOOD</span>
            <span className="text-yellow-400">TUCK</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex gap-6 text-xs font-medium justify-center items-center">
          <Link href="/" className="text-white hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/Menu" className="text-white hover:text-yellow-600 transition">
            Menu
          </Link>
          <Link href="/Blog" className="text-white hover:text-yellow-600 transition">
            Blog
          </Link>
          <Link href="/Page" className="text-white hover:text-yellow-600 transition">
            Page
          </Link>
          <Link href="/About" className="text-white hover:text-yellow-600 transition">
            About
          </Link>
          <Link href="/Signup" className="text-white hover:text-yellow-600 transition">
            Signup
          </Link>
          <Link href="/Contact" className="text-white hover:text-yellow-600 transition">
            Contact
          </Link>
          <Link href="/Signin" className="text-white hover:text-yellow-600 transition">
            Signin
          </Link>
        </nav>

        {/* Search Bar (Desktop version) */}
        <div className="hidden sm:block relative mx-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search..."
            className="w-64 px-4 py-2 rounded-md text-black"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')} // Clear search query
              className="absolute right-2 top-2 text-gray-500"
            >
              X
            </button>
          )}
        </div>

        {/* Cart Icon */}
        <div className="relative">
          <Link href="/Cart" className="text-white hover:text-yellow-500 text-xl flex items-center">
            🛒 {/* Cart Icon */}
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Checkout Button */}
        <div className="ml-4">
          <Link
            href="/Checkout"
            className={`px-3 py-1 text-xs sm:text-sm rounded-md transition duration-300 ${cartItemCount > 0
              ? 'bg-yellow-500 text-white hover:bg-white'
              : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
          >
            {cartItemCount > 0 ? 'Proceed to Checkout' : 'Add Items to Cart'}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden">
          <button
            onClick={toggleMobileMenu} // Use the toggle function to open/close the menu
            className="text-gray-700 hover:text-green-600 text-xl"
          >
            &#9776; {/* Hamburger menu for mobile */}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col gap-4 py-4 px-6 bg-white shadow-md">
          <Link href="/" className="text-gray-700 hover:text-green-600 transition">
            Home
          </Link>
          <Link href="/Menu" className="text-gray-700 hover:text-green-600 transition">
            Menu
          </Link>
          <Link href="/Blog" className="text-gray-700 hover:text-green-600 transition">
            Blog
          </Link>
          <Link href="/Page" className="text-gray-700 hover:text-green-600 transition">
            Page
          </Link>
          <Link href="/About" className="text-gray-700 hover:text-green-600 transition">
            About
          </Link>
          <Link href="/Signup" className="text-gray-700 hover:text-green-600 transition">
            Signup
          </Link>
          <Link href="/Contact" className="text-gray-700 hover:text-green-600 transition">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

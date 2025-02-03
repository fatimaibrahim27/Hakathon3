import React from "react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white text-sm sm:text-base">
      <div
        className="bg-cover bg-center h-[90px] sm:h-[130px] p-[26px] flex flex-col justify-center items-center text-white relative"
        style={{
          backgroundImage: 'url("/unsplash_4ycv3Ky1ZZU.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold">Signup Page</h1>
        <p className="mt-2 text-sm sm:text-base">signup here</p>
      </div>
      {/* Signup Form */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto max-w-sm bg-white shadow-md rounded-lg p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">Sign Up</h3>
          <form>
            <div className="mb-4">
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded mt-4"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-4">
            <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
          </p>
          <div className="text-center mt-6">
            <p className="text-gray-500 mb-2">or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded flex items-center justify-center mt-2">
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded flex items-center justify-center mt-2">
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

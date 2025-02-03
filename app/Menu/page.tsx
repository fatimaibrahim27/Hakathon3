import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

const Navbar = () => {
  const menuItems = [
    { name: 'Lettuce Leaf', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Group 67.png' },
    { name: 'Fresh Breakfast', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/Group 68.png' },
    { name: 'Mild Butter', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/unsplash_-lHZUkiWM74.png' },
    { name: 'Fresh Bread', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Group 68.png' },
    { name: 'Glow Cheese', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/product_img (1).png' },
    { name: 'Italian Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/product_img (2).png' },
    { name: 'Slice Beef', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/unsplash_CLMpC9UhyTo (1).png' },
    { name: 'Mushroom Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/unsplash_fdlZBWIP0aM.png' },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[90px] sm:h-[130px] p-[26px] flex flex-col justify-center items-center text-white relative"
        style={{
          backgroundImage: 'url("unsplash_4ycv3Ky1ZZU.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-xl sm:text-2xl font-extrabold">Our Menu</h1>
        <p className="mt-2 text-xs sm:text-sm">Explore our delicious menu options.</p>
        <div className="absolute bottom-4 text-xs sm:text-sm">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <span className="mx-2"> &gt; </span>
          <span>Menu</span>
        </div>
      </div>

      {/* Menu Section */}
      <section className="bg-gray-300 px-8 sm:px-16 lg:px-[135px] text-black py-12">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">Choose & Pick</h2>
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">From Our Menu</h1>

          {/* Categories */}
          <div className="flex justify-center mb-8">
            <ul className="flex flex-wrap justify-evenly space-x-2 sm:space-x-4">
              <li className="cursor-pointer hover:text-yellow-500">Breakfast</li>
              <li className="cursor-pointer hover:text-yellow-500">Lunch</li>
              <li className="cursor-pointer hover:text-yellow-500">Dinner</li>
              <li className="cursor-pointer hover:text-yellow-500">Dessert</li>
              <li className="cursor-pointer hover:text-yellow-500">Drink</li>
              <li className="cursor-pointer hover:text-yellow-500">Snack</li>
              <li className="cursor-pointer hover:text-yellow-500">Soups</li>
            </ul>
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="flex rounded-lg overflow-hidden shadow-lg">
                <div className="w-1/3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
                <div className="p-4 w-2/3">
                  <h1 className="text-sm sm:text-lg font-semibold">{item.name}</h1>
                  <p className="text-[10px] sm:text-xs text-gray-400 mb-2">{item.description}</p>
                  <h2 className="text-yellow-400 font-bold">{item.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;

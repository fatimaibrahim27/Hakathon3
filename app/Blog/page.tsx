import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div>
      {/* Section with background image and text */}
      <div
        className="bg-cover bg-center h-[90px] sm:h-[130px] p-[26px] flex flex-col justify-center items-center text-white relative"
        style={{
          backgroundImage: 'url("/unsplash_4ycv3Ky1ZZU.png")',
        }}
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold">Blog page</h1>
        <p className="mt-2 text-sm sm:text-base">Explore our delicious menu options.</p>

        {/* Breadcrumb */}
        <div className="absolute bottom-4 text-xs sm:text-sm">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <span className="mx-2"> &gt; </span>
          <Link href="/menu" className="hover:text-yellow-400 transition">
            blog
          </Link>
        </div>
      </div>

      {/* Blog Post List */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/Group 67.png" alt="Delicious Dish" width={600} height={400} className="w-full h-[250px] object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">Top 10 Dishes You Must Try</h3>
                <p className="mt-4 text-gray-600">From classic recipes to new food trends, we’ve compiled a list of the best dishes you can try right now.</p>
                <Link href="/blog/post-1" className="text-yellow-500 hover:text-yellow-600 mt-4 inline-block">Read More</Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/Grand Italiano.png" alt="Healthy Food" width={600} height={400} className="w-full h-[250px] object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">Eating Healthy: Simple Tips</h3>
                <p className="mt-4 text-gray-600">Eating healthy doesn’t have to be complicated. Discover simple tips to make healthy eating easier for you.</p>
                <Link href="/blog/post-2" className="text-yellow-500 hover:text-yellow-600 mt-4 inline-block">Read More</Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/unsplash_CLMpC9UhyTo (1).png" alt="Food Trend" width={600} height={400} className="w-full h-[250px] object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">The Future of Food: What’s Next?</h3>
                <p className="mt-4 text-gray-600">What does the future of food look like? In this post, we explore new trends and technologies shaping the culinary world.</p>
                <Link href="/blog/post-3" className="text-yellow-500 hover:text-yellow-600 mt-4 inline-block">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

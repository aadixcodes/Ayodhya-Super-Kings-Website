'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { blogPosts } from './blogData';

export default function Blogs() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]">
          <img
            src="/assets/pagesBanner.png"
            alt="Team Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#1c0f0d] p-4">
            <nav className="text-xs sm:text-sm md:text-base mb-2 mt-12 sm:mt-0">
              <span>Home / </span>
              <span>blogs</span>
            </nav>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-koba text-[#1c0f0d]">Blogs</h1>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#fab604]">Our Blogs</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-koba text-[#1c0f0d]  mt-2">Latest Blogs and Articles</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-20">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-[#fab604] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-700 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{post.description}</p>
                <div className="text-center">
                  <Link 
                    href={`/blogs/${post.slug}`}
                    className="inline-block px-4 py-1 mt-2 bg-[#1c0f0d] text-[#fab604] rounded-md transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
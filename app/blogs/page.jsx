'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Blogs() {
  const router = useRouter();
  const blogPosts = [
    {
      id: 1,
      title: "Ayodhya Super Kings Kick Off Season with a Thrilling Win",
      description:
        "Ayodhya Super Kings started their campaign with an electrifying win against Lucknow Titans. A detailed recap of the intense match and standout performances.",
      date: "July 10, 2025",
      image: "/assets/homegallery4.png"
    },
    {
      id: 2,
      title: "Meet the Stars: Key Players of Ayodhya Super Kings 2025",
      description:
        "Get to know the top performers and rising talents in the Ayodhya Super Kings squad. Player bios, stats, and what makes them special.",
      date: "July 12, 2025",
      image: "/assets/homegallery4.png"
    },
    {
      id: 3,
      title: "Behind the Scenes: Training Day with Ayodhya Super Kings",
      description:
        "Step into a full day of practice with the Super Kings as they prepare physically and mentally for the upcoming matches.",
      date: "July 13, 2025",
      image: "/assets/homegallery4.png"
    },
    {
      id: 4,
      title: "Fan Diaries: Support for Ayodhya Super Kings Grows Across UP",
      description:
        "Explore the fan movement building around Ayodhya Super Kings — from stadium chants to fan art and social media trends.",
      date: "July 15, 2025",
      image: "/assets/homegallery4.png"
    }
  ];
  

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Blogs</h1>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#1c0f0d]">Our Blogs</h2>
          <h1 className="text-5xl sm:text-5xl md:text-8xl font-bold stroke-only mt-2">Latest Blogs and Articles</h1>
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
                    href='single-blog-page'
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
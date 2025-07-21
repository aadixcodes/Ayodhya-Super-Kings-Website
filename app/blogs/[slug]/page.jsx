import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '../blogData';

export default function SingleBlog({ params }) {
  const { slug } = params;
  const blogData = blogPosts.find(post => post.slug === slug);

  if (!blogData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <Link href="/blogs" className="text-[#fab604] hover:underline">
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Blog Header */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[400px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={blogData.image}
            alt={blogData.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm sm:text-base">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {blogData.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    By {blogData.author}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {blogData.readTime}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  {blogData.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blogs" className="inline-flex items-center text-[#fab604] hover:text-[#e0a500] font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Blogs
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10">
            {blogData.content.map((item, index) => {
              switch (item.type) {
                case 'paragraph':
                  return (
                    <p key={index} className="text-[#1c0f0d] mb-6 leading-relaxed">
                      {item.text}
                    </p>
                  );
                case 'heading':
                  return (
                    <h2 key={index} className="text-2xl font-bold text-[#1c0f0d] mt-8 mb-4">
                      {item.text}
                    </h2>
                  );
                case 'image':
                  return (
                    <div key={index} className="my-8">
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                      {item.caption && (
                        <p className="text-center text-sm text-gray-500 mt-2">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  );
                case 'list':
                  return (
                    <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-[#1c0f0d]">
                      {item.items.map((listItem, i) => (
                        <li key={i}>{listItem}</li>
                      ))}
                    </ul>
                  );
                case 'quote':
                  return (
                    <blockquote key={index} className="border-l-4 border-[#fab604] pl-4 my-8 italic text-[#1c0f0d]">
                      <p className="text-lg">"{item.text}"</p>
                      {item.author && (
                        <footer className="mt-2 not-italic font-semibold text-[#1c0f0d]">
                          — {item.author}
                        </footer>
                      )}
                    </blockquote>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = blogPosts.find(post => post.slug === slug);

  return {
    title: blog?.title || 'Blog Not Found',
    description: blog?.description || 'Blog post not available',
  };
}



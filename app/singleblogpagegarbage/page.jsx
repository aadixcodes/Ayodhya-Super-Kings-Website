'use client';

import { Calendar, User, Clock, Share2, Facebook, Twitter, Instagram, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SingleBlog() {
  const blogData = {
    id: 1,
    title: "Ayodhya Super Kings Make History with Championship Win",
    date: "June 28, 2024",
    author: "Sports Desk",
    readTime: "5 min read",
    image: "/assets/homegallery2.png",
    content: [
      {
        type: "paragraph",
        text: "In a thrilling finale that kept fans on the edge of their seats, Ayodhya Super Kings clinched their first-ever Regional Volleyball Championship title with a 3-2 victory against the defending champions Kanpur Warriors. The match, played at the newly inaugurated Ramayana Sports Complex, witnessed record attendance with over 8,000 spectators cheering for the home team."
      },
      {
        type: "heading",
        text: "The Decisive Fifth Set"
      },
      {
        type: "paragraph",
        text: "After splitting the first four sets (25-23, 21-25, 25-20, 22-25), the championship came down to a nerve-wracking fifth set. Captain Rajat Sharma's leadership proved crucial as he strategically rotated players, keeping the Warriors guessing. The turning point came when substitute player Vikram Singh executed three consecutive blocks, giving Ayodhya a 14-12 lead."
      },
      {
        type: "paragraph",
        text: "Middle blocker Priya Malik sealed the victory with a powerful spike that the Warriors' defense couldn't handle, sending the crowd into a frenzy. The final score of the decisive set was 15-13 in Ayodhya's favor."
      },
      {
        type: "image",
        src: "/assets/aboutsection.png",
        alt: "Celebration after championship win",
        caption: "Team celebrates after winning the championship point"
      },
      {
        type: "heading",
        text: "Key Performances"
      },
      {
        type: "paragraph",
        text: "Several players stood out in this historic victory:"
      },
      {
        type: "list",
        items: [
          "Rajat Sharma (Captain): 18 spikes, 5 blocks, 3 service aces",
          "Priya Malik: 22 spikes with 68% success rate",
          "Vikram Singh: 7 blocks including 3 in the final set",
          "Setter Arjun Verma: 42 excellent sets"
        ]
      },
      {
        type: "heading",
        text: "Coach's Reaction"
      },
      {
        type: "paragraph",
        text: "Head coach Amrit Pal Singh, who joined the team just six months ago, was emotional after the win: 'This is why we train 6 hours a day, 6 days a week. These players have shown incredible dedication. Today they didn't just play volleyball - they wrote history for Ayodhya.'"
      },
      {
        type: "quote",
        text: "This victory isn't just about a trophy. It's about putting Ayodhya on the national volleyball map and inspiring thousands of young athletes in our region.",
        author: "Amrit Pal Singh, Head Coach"
      },
      {
        type: "heading",
        text: "What's Next for the Champions?"
      },
      {
        type: "paragraph",
        text: "With this win, Ayodhya Super Kings have qualified for the National Club Championship scheduled for August. The team will get a 10-day break before beginning preparations for the bigger challenge. Management has also announced open trials for two new players next month to strengthen the squad."
      }
    ]
  };

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
      {/* Back Button */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blogs" className="inline-flex items-center text-[#fab604] hover:text-[#e0a500] font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to All News
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
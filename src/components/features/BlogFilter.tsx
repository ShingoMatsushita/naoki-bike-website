'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/components/common/Link';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  publishedAt: string;
  thumbnail?: { url: string; width: number; height: number };
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface BlogFilterProps {
  posts: BlogPost[];
}

export function BlogFilter({ posts }: BlogFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('すべて');

  const categories = ['すべて', 'お知らせ', 'イベント', 'メンテナンス情報', 'コラム'];

  // Filter posts based on selected category
  const displayPosts = selectedCategory === 'すべて'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-b from-white to-gray-50 border-b-2 border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group px-6 py-2.5 border-2 transition-all duration-300 text-sm font-bold relative overflow-hidden cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#cc0000] text-white border-[#cc0000] shadow-md'
                    : 'border-[#cc0000] text-[#cc0000] hover:bg-[#cc0000] hover:text-white hover:shadow-md'
                }`}
              >
                <span className="relative z-10">{category}</span>
                {/* Hover Background Effect */}
                {selectedCategory !== category && (
                  <div className="absolute inset-0 bg-[#cc0000] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-[--color-accent]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-4">
            {displayPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group block bg-white border-2 border-gray-100 hover:border-[#cc0000] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="md:flex">
                  {/* Thumbnail */}
                  <div className="relative h-48 shrink-0 bg-gray-200 md:h-auto md:w-1/3 overflow-hidden">
                    {post.thumbnail?.url ? (
                      <Image
                        src={post.thumbnail.url}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                        画像
                      </div>
                    )}
                    {/* Category Badge Overlay */}
                    <div className="absolute top-3 left-3">
                      <span className="text-xs bg-[#cc0000] text-white px-3 py-1.5 font-bold shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 p-6 md:w-2/3 md:flex md:flex-col md:justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm text-[--text-secondary] flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {post.publishedAt}
                      </span>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-[--text-primary] mb-3 group-hover:text-[#cc0000] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <div className="flex items-center text-[#cc0000] font-bold text-sm group-hover:gap-3 transition-all">
                      続きを読む
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="px-4 py-2 bg-[#cc0000] text-white text-sm font-bold hover:bg-[#990000] transition-all cursor-pointer">
              1
            </button>
            <button className="px-4 py-2 bg-white text-sm font-bold hover:bg-gray-100 transition-all cursor-pointer">
              2
            </button>
            <button className="px-4 py-2 bg-white text-sm font-bold hover:bg-gray-100 transition-all cursor-pointer">
              3
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

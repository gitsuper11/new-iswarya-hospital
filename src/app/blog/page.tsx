'use client';

import Link from 'next/link';
import { useState } from 'react';
import BlogCard from '@/components/features/blog/BlogCard';
import { blogPosts } from '@/lib/data/blog';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blood-red to-[rgb(20,70,150)] py-12 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Healthcare tips, medical insights, and updates from Iswarya Hospital
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="w-full py-8 px-4 bg-light-blue-bg">
        <div className="container mx-auto">
          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blood-red shadow-md"
            />
          </div>

          {/* Category Filter */}
          <div>
            <p className="text-sm font-semibold text-blood-red mb-3">Filter by Category:</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blood-red text-white shadow-lg'
                      : 'bg-white text-blood-red border border-blood-red hover:bg-blood-red hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto">
          {filteredPosts.length > 0 ? (
            <>
              <p className="text-center text-gray-600 mb-8">
                Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <BlogCard post={post} />
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 mb-4">No articles found matching your search</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                }}
                className="bg-blood-red text-white px-6 py-2 rounded-lg hover:bg-red-900 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

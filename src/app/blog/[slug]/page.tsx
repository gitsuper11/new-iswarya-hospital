'use client';

import Link from 'next/link';
import { blogPosts } from '@/lib/data/blog';
import { notFound } from 'next/navigation';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Hero Section with Image */}
      <section className="w-full relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <div className="text-white">
            <span className="inline-block bg-blood-red px-4 py-1 rounded-full text-xs font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Article Meta & Navigation */}
      <section className="w-full bg-light-blue-bg py-6 px-4 border-b border-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <i className="fas fa-calendar text-blood-red"></i>
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-user text-blood-red"></i>
              <span>By {post.author}</span>
            </div>
          </div>
          <Link href="/blog" className="text-blood-red hover:text-red-900 font-semibold text-sm flex items-center gap-2">
            <i className="fas fa-chevron-left"></i> Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Article Body */}
          <article className="prose prose-lg max-w-none mb-12">
            <div className="text-gray-800 leading-relaxed whitespace-pre-wrap text-justify">{post.content}</div>
          </article>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-12 pb-12 border-b">
              <p className="text-sm font-semibold text-gray-600 mb-3">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="bg-light-blue-bg text-blood-red px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share & CTA */}
          <div className="bg-[#FFEEEE] rounded-xl p-6 mb-12">
            <h3 className="text-lg font-bold text-blood-red mb-4">Share This Article</h3>
            <div className="flex gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://iswarya.com/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blood-red text-white p-3 rounded-lg hover:bg-red-900 transition-colors"
                title="Share on Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href={`https://www.twitter.com/intent/tweet?url=https://iswarya.com/blog/${post.slug}&text=${post.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blood-red text-white p-3 rounded-lg hover:bg-red-900 transition-colors"
                title="Share on Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href={`https://wa.me/?text=Check this article: ${post.title} https://iswarya.com/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blood-red text-white p-3 rounded-lg hover:bg-red-900 transition-colors"
                title="Share on WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-light-blue-bg rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold text-blood-red mb-4">Need Medical Consultation?</h3>
            <p className="text-gray-700 mb-6">Our expert doctors are available to help you with personalized medical advice.</p>
            <a href="https://wa.me/914420252025" target="_blank" rel="noopener noreferrer">
              <button className="bg-blood-red text-white px-8 py-3 rounded-lg hover:bg-red-900 transition-colors font-semibold shadow-lg">
                <i className="fas fa-calendar mr-2"></i> Schedule Consultation
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="w-full py-12 px-4 bg-light-blue-bg">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-blood-red mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer h-full">
                    <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <span className="inline-block text-xs font-semibold text-blood-red bg-[#FFEEEE] px-2 py-1 rounded mb-2">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-sm font-bold text-blood-red mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <p className="text-xs text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                      <p className="text-xs text-gray-500 mt-3">
                        {new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

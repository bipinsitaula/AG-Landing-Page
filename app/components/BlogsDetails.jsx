'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHeader from './PageHeader';

const BlogsDetails = ({ blogData }) => {
  if (!blogData) return null;

  return (
    <>
      <Navbar />
      <PageHeader 
        title={blogData.title} 
        subtitle={`Published in ${blogData.categoryName || 'General'}`}
        gradient="from-orange-700 via-orange-500 to-orange-400"
      />
      
      <div className="bg-white min-h-screen py-20 pb-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <div className="mb-12" data-aos="fade-up">
            <Link 
              href="/blogs"
              className="inline-flex items-center gap-3 text-gray-400 hover:text-orange-500 font-black transition-all group text-xs uppercase tracking-widest bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-50 hover:border-gray-200"
            >
              <i className="fa-solid fa-arrow-left transition-transform group-hover:-trangray-x-1"></i>
              Back to All Blogs
            </Link>
          </div>

          <article className="bg-white rounded-[3rem] shadow-sm overflow-hidden border border-gray-100 mb-20" data-aos="fade-up">
            {/* Main Image */}
            {blogData.imageUrl && (
              <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
                <Image 
                  src={blogData.imageUrl} 
                  alt={blogData.title} 
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-1000"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}

            {/* Content Container */}
            <div className="p-8 md:p-20">
              {/* Tags and Category */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <span className="bg-orange-500 text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-wider shadow-lg shadow-orange-500/20">
                  {blogData.categoryName || 'Logistics'}
                </span>
                <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                <div className="flex flex-wrap gap-2">
                  {blogData.tags?.map((tag) => (
                    <span key={tag.id} className="text-gray-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white rounded-xl border border-gray-100">
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title (hidden if using PageHeader, but keeping accessible structure) */}
              <h1 className="sr-only">{blogData.title}</h1>

              {/* Blog Content */}
              <div 
                className="prose prose-xl max-w-none text-gray-700 leading-[1.8] space-y-8 blog-content"
                dangerouslySetInnerHTML={{ __html: blogData.description }}
              />

              {/* Share and Footer */}
              <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Share Article</p>
                    <p className="text-sm font-bold text-black">Spread the knowledge</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <i className="fa-brands fa-facebook-f"></i>
                  </button>
                  <button className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <i className="fa-brands fa-twitter"></i>
                  </button>
                  <button className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </button>
                  <button className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <i className="fa-brands fa-whatsapp"></i>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer />

      <style jsx global>{`
        .blog-content {
          font-family: var(--font-plus-jakarta-sans), sans-serif;
        }
        .blog-content h1, .blog-content h2, .blog-content h3 {
          color: #111827;
          font-weight: 900;
          margin-top: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .blog-content h1 { font-size: 3rem; }
        .blog-content h2 { font-size: 2.25rem; }
        .blog-content h3 { font-size: 1.75rem; }
        .blog-content p { margin-bottom: 2rem; color: #4b5563; }
        .blog-content ul { list-style-type: none; padding-left: 0; margin-bottom: 2rem; }
        .blog-content ul li { position: relative; padding-left: 2rem; margin-bottom: 1rem; }
        .blog-content ul li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #f97316;
          font-weight: 900;
        }
        .blog-content ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 2rem; }
        .blog-content img { border-radius: 2.5rem; margin: 3.5rem 0; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1); width: 100%; height: auto; }
        .blog-content blockquote {
          background: #fdf7f2;
          border-left: 6px solid #f97316;
          padding: 3rem;
          border-radius: 0 2.5rem 2.5rem 0;
          font-style: italic;
          font-weight: 600;
          font-size: 1.5rem;
          color: #1f2937;
          margin: 3.5rem 0;
          line-height: 1.6;
        }
        .blog-content strong { color: #111827; font-weight: 800; }
        .blog-content a { color: #f97316; text-decoration: underline; font-weight: 800; transition: color 0.3s; }
        .blog-content a:hover { color: #ea580c; }
      `}</style>
    </>
  );
};

export default BlogsDetails;



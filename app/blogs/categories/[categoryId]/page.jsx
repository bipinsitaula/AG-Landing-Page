'use client';
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHeader from '../../../components/PageHeader';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { APIGetBlogByCategory } from "@/api/blog";

export default function CategoryPage() {
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { categoryId } = useParams();

  const getCategoryBlogs = async () => {
    try {
      setLoading(true);
      const response = await APIGetBlogByCategory(categoryId);
      if (response?.data) {
        setCategoryData(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (categoryId) {
      getCategoryBlogs();
    }
  }, [categoryId]);

  return (
    <>
      <Navbar />
      <PageHeader 
        title={categoryData?.categoryName || "Category"} 
        subtitle={`Exploring articles in ${categoryData?.categoryName || 'this category'}`}
        gradient="from-orange-700 via-orange-500 to-orange-400"
      />

      <div className="bg-gray-50 min-h-screen py-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <div className="mb-12" data-aos="fade-up">
            <button
              onClick={() => router.push('/blogs')}
              className="inline-flex items-center gap-3 text-gray-400 hover:text-orange-500 font-black transition-all group text-xs uppercase tracking-widest bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-50 hover:border-orange-100"
            >
              <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
              Back to All Blogs
            </button>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mb-4"></div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Loading Category...</p>
            </div>
          ) : categoryData?.blogs?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {categoryData.blogs.map((blog, idx) => (
                <div 
                  key={blog.id} 
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-gray-50 flex flex-col h-full"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-10 flex flex-col flex-1">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-5 group-hover:text-orange-500 transition-colors line-clamp-2 leading-tight">
                      {blog.title}
                    </h3>
                    
                    <div className="flex gap-2 mb-6 flex-wrap">
                      {blog.tags?.slice(0, 3).map(tag => (
                        <span key={tag.id} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 py-1 bg-gray-50 border border-gray-100 rounded-xl">
                          #{tag.name}
                        </span>
                      ))}
                    </div>

                    <div 
                      className="text-gray-500 text-sm line-clamp-3 mb-10 leading-relaxed flex-1"
                      dangerouslySetInnerHTML={{ __html: blog.description }}
                    />

                    <Link 
                      href={`/blogs/${blog.id}`}
                      className="inline-flex items-center gap-3 text-orange-500 font-black text-xs uppercase tracking-widest group/link bg-orange-50 self-start px-6 py-3 rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm"
                    >
                      Read Article
                      <i className="fa-solid fa-arrow-right transition-transform group-hover/link:translate-x-1"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white rounded-[3rem] shadow-sm border border-gray-100 mb-20" data-aos="fade-up">
              <div className="text-orange-100 text-8xl mb-8"><i className="fa-solid fa-folder-open"></i></div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">No Articles Found</h2>
              <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg">We haven&apos;t published any articles in this category yet.</p>
              <Link href="/blogs" className="inline-block bg-orange-500 text-white font-black px-10 py-5 rounded-[1.5rem] shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all hover:scale-105">
                Browse All Topics
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

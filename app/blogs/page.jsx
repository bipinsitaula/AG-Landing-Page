'use client';
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { APIGetAllBlogsPaginated, APIGetActiveBlogCategory } from "@/api/blog";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const limit = 9;
  const router = useRouter();

  // Fetch Blogs
  const getAllBlogs = async (p, l) => {
    try {
      setLoading(true);
      const response = await APIGetAllBlogsPaginated(p, l);
      if (response?.data) {
        setBlogs(response.data.blogs || []);
        setTotalItems(response.data.totalItems || 0);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Categories
  const getBlogCategories = async () => {
    try {
      const response = await APIGetActiveBlogCategory();
      if (response?.data) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllBlogs(page, limit);
  }, [page]);

  useEffect(() => {
    getBlogCategories();
  }, []);

  // Filter blogs based on search query (client-side)
  const filteredBlogs = useMemo(() => {
    if (!searchQuery) return blogs;
    return blogs.filter(blog => 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags?.some(tag => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [blogs, searchQuery]);

  const totalPages = Math.ceil(totalItems / limit);

  return (
    <>
      <Navbar />
      <PageHeader 
        title="Our Blog" 
        subtitle="Latest updates and insights from the logistics world." 
        gradient="from-orange-700 via-orange-500 to-orange-400" 
      />

      <div className="bg-white min-h-screen py-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search and Categories Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16" data-aos="fade-up">
            <div className="flex-1 max-w-md relative group">
              <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -trangray-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors"></i>
              <input 
                type="text" 
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-14 pr-6 focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all shadow-sm font-medium text-gray-700"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-sm ${
                  selectedCategory === null 
                    ? "bg-orange-500 text-white shadow-orange-500/20" 
                    : "bg-white text-gray-500 hover:bg-white hover:text-orange-500 border border-gray-100"
                }`}
              >
                All Topics
              </button>
              {categories?.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    router.push(`/blogs/categories/${category.id}`);
                  }}
                  className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all border border-gray-100 shadow-sm ${
                    selectedCategory === category.id 
                      ? "bg-orange-500 text-white shadow-orange-500/20" 
                      : "bg-white text-gray-500 hover:bg-white hover:text-orange-500"
                  }`}
                >
                  {category.categoryName}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mb-4"></div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Loading Blogs...</p>
            </div>
          ) : filteredBlogs.length > 0 ? (
            <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredBlogs.map((blog, idx) => (
                <div 
                  key={blog.id} 
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-trangray-y-2 transition-all duration-500 group border border-gray-100 flex flex-col h-full"
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
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/95 backdrop-blur-md text-orange-600 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-wider shadow-lg">
                        {blog.categoryName || 'Logistics'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-10 flex flex-col flex-1">
                    <h3 className="text-xl font-extrabold text-black mb-5 group-hover:text-orange-500 transition-colors line-clamp-2 leading-tight">
                      {blog.title}
                    </h3>
                    
                    <div className="flex gap-2 mb-6 flex-wrap">
                      {blog.tags?.slice(0, 3).map(tag => (
                        <span key={tag.id} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 py-1 bg-white border border-gray-100 rounded-xl">
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
                      className="inline-flex items-center gap-3 text-orange-500 font-black text-xs uppercase tracking-widest group/link bg-white self-start px-6 py-3 rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm"
                    >
                      Read Article
                      <i className="fa-solid fa-arrow-right transition-transform group-hover/link:trangray-x-1"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination only if no search filter active, otherwise it might be confusing */}
            {!searchQuery && totalPages > 1 && (
              <div className="pb-20 flex justify-center gap-3">
                <button 
                  onClick={() => setPage(prev => Math.max(1, prev - 1))}
                  disabled={page === 1}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all bg-white border ${
                    page === 1 ? "text-gray-200 border-gray-50 cursor-not-allowed" : "text-gray-600 border-gray-100 hover:border-orange-500 hover:text-orange-500 hover:shadow-lg shadow-sm"
                  }`}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setPage(i + 1)}
                    className={`w-14 h-14 rounded-2xl font-black transition-all ${
                      page === i + 1 
                        ? "bg-orange-500 text-white shadow-xl shadow-orange-500/30 scale-110" 
                        : "bg-white text-gray-400 border border-gray-100 hover:border-orange-500 hover:text-orange-500 shadow-sm"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button 
                  onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={page === totalPages}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all bg-white border ${
                    page === totalPages ? "text-gray-200 border-gray-50 cursor-not-allowed" : "text-gray-600 border-gray-100 hover:border-orange-500 hover:text-orange-500 hover:shadow-lg shadow-sm"
                  }`}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            )}
            </>
          ) : (
            <div className="text-center py-32 bg-white rounded-[3rem] shadow-sm border border-gray-100 mb-20 px-8" data-aos="fade-up">
              <div className="text-orange-100 text-8xl mb-8"><i className="fa-solid fa-magnifying-glass"></i></div>
              <h2 className="text-3xl font-black text-black mb-4">No results for &quot;{searchQuery}&quot;</h2>
              <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg">We couldn&apos;t find any articles matching your search. Try different keywords or browse by category.</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="bg-orange-500 text-white font-black px-10 py-5 rounded-[1.5rem] shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all hover:scale-105"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}



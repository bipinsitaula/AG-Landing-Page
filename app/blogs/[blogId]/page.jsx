import { APIGetBlogDetails } from "@/api/blog";
import BlogsDetails from "@/app/components/BlogsDetails";

async function getBlog(blogId) {
  try {
    const res = await APIGetBlogDetails(blogId);
    if (!res?.data) return null;
    return res.data;
  } catch (error) {
    console.error("Error in getBlog:", error);
    return null;
  }
}

// ✅ Generate meta tags dynamically for SEO / social sharing
export async function generateMetadata({ params }) {
  const { blogId } = await params;
  const post = await getBlog(blogId);

  if (!post) {
    return {
      title: "Blog Not Found | AG Express",
      description: "The blog post you are looking for could not be found.",
    };
  }

  return {
    title: post.metaTitle || `${post.title} | AG Express`,
    description: post.metaDescription || post.description?.replace(/<[^>]*>?/gm, "").substring(0, 160),
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.description?.replace(/<[^>]*>?/gm, "").substring(0, 160),
      images: [post.imageUrl],
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://agexpress.com'}/blogs/${post.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.description?.replace(/<[^>]*>?/gm, "").substring(0, 160),
      images: [post.imageUrl],
    },
  };
}

// ✅ Server component to fetch and pass data to client component
export default async function BlogPage({ params }) {
  const { blogId } = await params;
  const blog = await getBlog(blogId);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center p-10 bg-white rounded-3xl shadow-xl border border-gray-100 max-w-sm">
          <div className="text-orange-200 text-6xl mb-6"><i className="fa-solid fa-circle-exclamation"></i></div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Blog Not Found</h1>
          <p className="text-gray-500 mb-8">The post you are looking for does not exist or has been removed.</p>
          <a href="/blogs" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition inline-block">
            Back to All Blogs
          </a>
        </div>
      </div>
    );
  }

  return <BlogsDetails blogData={blog} />;
}

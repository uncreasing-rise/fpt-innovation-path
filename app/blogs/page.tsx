// app/blogs/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

// ==============================
// TypeScript types
// ==============================
export interface Blog {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  featuredImage: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: number;
  featured?: boolean;
}

// ==============================
// Mock API function
// ==============================
async function fetchBlogs(): Promise<Blog[]> {
  await new Promise((res) => setTimeout(res, 500)); // simulate network delay
  return [
    {
      slug: "fpt-innovation",
      title: "FPT Innovation Path",
      subtitle: "Dẫn đầu cuộc cách mạng AI và chuyển đổi số tại Việt Nam",
      excerpt: "Khám phá chiến lược đổi mới táo bạo của FPT năm 2025, với tầm nhìn trở thành công ty công nghệ hàng đầu khu vực thông qua đầu tư mạnh mẽ vào AI và Digital Transformation.",
      publishedAt: "2025-09-21",
      category: "Technology",
      featuredImage: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      author: {
        name: "Nguyễn Minh Anh",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      readTime: 8,
      tags: ["Innovation", "FPT", "AI", "Digital Transformation"],
      featured: true
    },
    {
      slug: "startups-asia",
      title: "Startups in Asia 2025",
      subtitle: "Cơ hội vàng cho các startup công nghệ trong kỷ nguyên số",
      excerpt: "Phân tích chi tiết về thị trường startup Châu Á 2025 với tổng vốn đầu tư đạt kỷ lục 180 tỷ USD. Khám phá xu hướng đầu tư và những cơ hội đột phá cho các founder.",
      publishedAt: "2025-08-15",
      category: "Investment",
      featuredImage: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      author: {
        name: "David Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      readTime: 10,
      tags: ["Startup", "Asia", "Investment", "Funding"],
      featured: true
    },
    {
      slug: "fundraising-guide",
      title: "Fundraising Guide for Founders",
      subtitle: "Bí quyết gọi vốn thành công từ Seed đến Series A",
      excerpt: "Hướng dẫn toàn diện về fundraising cho founder với tỷ lệ thành công chỉ 0.5%. Từ chuẩn bị pitch deck đến đàm phán với nhà đầu tư, tất cả những gì bạn cần biết.",
      publishedAt: "2025-07-10",
      category: "Entrepreneurship",
      featuredImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      author: {
        name: "Sarah Kim",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b829?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      readTime: 12,
      tags: ["Fundraising", "Guide", "Startup", "Venture Capital"]
    },
    {
      slug: "ai-trends-2025",
      title: "AI Trends 2025",
      subtitle: "Những xu hướng AI sẽ định hình tương lai",
      excerpt: "Từ GPT-5 đến AI agents, khám phá 10 xu hướng AI quan trọng nhất sẽ thay đổi cách chúng ta làm việc và sống trong năm 2025.",
      publishedAt: "2025-06-05",
      category: "Technology",
      featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      author: {
        name: "Alex Johnson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      readTime: 6,
      tags: ["AI", "Technology", "Future", "Trends"]
    },
    {
      slug: "vietnam-tech-ecosystem",
      title: "Vietnam Tech Ecosystem",
      subtitle: "Sự trỗi dậy của công nghệ Việt Nam",
      excerpt: "Tìm hiểu về sự phát triển vượt bậc của hệ sinh thái công nghệ Việt Nam với các unicorn như VNG, Viettel và những startup triển vọng.",
      publishedAt: "2025-05-20",
      category: "Tech Ecosystem",
      featuredImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      author: {
        name: "Trần Văn Nam",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      readTime: 9,
      tags: ["Vietnam", "Tech", "Ecosystem", "Startup"]
    },
    {
      slug: "fintech-revolution",
      title: "Fintech Revolution",
      subtitle: "Cuộc cách mạng fintech đang thay đổi ngân hàng",
      excerpt: "Khám phá cách fintech đang disrupting traditional banking với blockchain, AI, và digital payments. Cơ hội và thách thức cho các ngân hàng truyền thống.",
      publishedAt: "2025-04-15",
      category: "Finance",
      featuredImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      author: {
        name: "Lisa Wang",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b829?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      readTime: 7,
      tags: ["Fintech", "Banking", "Blockchain", "Digital"]
    }
  ];
}

// ==============================
// Category Badge Component
// ==============================
const CategoryBadge: React.FC<{ category: string }> = ({ category }) => {
  const colors: Record<string, string> = {
    Technology: "bg-blue-100 text-blue-800 border-blue-200",
    Investment: "bg-green-100 text-green-800 border-green-200",
    Entrepreneurship: "bg-purple-100 text-purple-800 border-purple-200",
    Finance: "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Tech Ecosystem": "bg-indigo-100 text-indigo-800 border-indigo-200",
  };
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
        colors[category] || "bg-gray-100 text-gray-800 border-gray-200"
      }`}
    >
      {category}
    </span>
  );
};

// ==============================
// Featured Blog Card Component
// ==============================
const FeaturedBlogCard: React.FC<{ blog: Blog }> = ({ blog }) => (
  <Link href={`/blogs/${blog.slug}`} className="group block">
    <article className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Featured Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          ⭐ Featured
        </span>
      </div>

      {/* Image */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <Image
          src={blog.featuredImage}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <CategoryBadge category={blog.category} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-center mb-4 space-x-3">
          <Image
            src={blog.author.avatar}
            alt={blog.author.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{blog.author.name}</p>
            <div className="flex items-center text-xs text-gray-500 space-x-2">
              <time>
                {new Date(blog.publishedAt).toLocaleDateString("vi-VN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{blog.readTime} phút đọc</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {blog.title}
        </h2>
        {blog.subtitle && (
          <h3 className="text-lg text-gray-600 mb-3 font-medium line-clamp-1">
            {blog.subtitle}
          </h3>
        )}
        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{blog.excerpt}</p>

        <div className="flex flex-wrap gap-2">
          {blog.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
            >
              #{tag}
            </span>
          ))}
          {blog.tags.length > 3 && (
            <span className="text-xs text-gray-500 font-medium">+{blog.tags.length - 3} more</span>
          )}
        </div>
      </div>
    </article>
  </Link>
);

// ==============================
// Regular Blog Card Component
// ==============================
const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => (
  <Link href={`/blogs/${blog.slug}`} className="group block">
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.featuredImage}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <CategoryBadge category={blog.category} />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Image
            src={blog.author.avatar}
            alt={blog.author.name}
            width={28}
            height={28}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{blog.author.name}</p>
            <div className="flex items-center text-xs text-gray-500 space-x-2">
              <time>
                {new Date(blog.publishedAt).toLocaleDateString("vi-VN", {
                  month: "short",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{blog.readTime} phút</span>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {blog.title}
        </h2>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3 leading-relaxed">{blog.excerpt}</p>

        <div className="flex flex-wrap gap-2">
          {blog.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
          {blog.tags.length > 2 && (
            <span className="text-xs text-gray-500 font-medium">+{blog.tags.length - 2}</span>
          )}
        </div>
      </div>
    </article>
  </Link>
);

// ==============================
// Stats Component
// ==============================
const StatsSection: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
  const totalReadTime = blogs.reduce((sum, blog) => sum + blog.readTime, 0);
  const categories = [...new Set(blogs.map((blog) => blog.category))].length;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-3xl font-bold text-blue-600 mb-2">{blogs.length}</div>
          <div className="text-gray-600 font-medium">Bài viết</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-green-600 mb-2">{categories}</div>
          <div className="text-gray-600 font-medium">Chủ đề</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-purple-600 mb-2">{totalReadTime}</div>
          <div className="text-gray-600 font-medium">Phút đọc</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
          <div className="text-gray-600 font-medium">Cập nhật</div>
        </div>
      </div>
    </div>
  );
};

// ==============================
// Search Component
// ==============================
const SearchSection: React.FC = () => (
  <div className="relative max-w-2xl mx-auto mb-16">
    <div className="relative">
      <input
        type="text"
        placeholder="Tìm kiếm bài viết, chủ đề, tác giả..."
        className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 shadow-sm"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  </div>
);




const BlogsPage = async () => {
  const blogs = await fetchBlogs();
  const featuredBlogs = blogs.filter((blog) => blog.featured);
  const regularBlogs = blogs.filter((blog) => !blog.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#0a1a3f] text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
         Insights Blog
          </h1>
        </div>-
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <SearchSection />
        <StatsSection blogs={blogs} />

        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Chưa có bài viết nào
            </h2>
            <p className="text-gray-600">
              Hãy quay lại sau để đọc những bài viết mới nhất!
            </p>
          </div>
        ) : (
          <>
            {/* Featured Articles */}
            {featuredBlogs.length > 0 && (
              <section className="mb-20">
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    🔥 Bài viết nổi bật
                  </h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 ml-8 rounded-full"></div>
                </div>

                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                  {featuredBlogs.map((blog) => (
                    <FeaturedBlogCard key={blog.slug} blog={blog} />
                  ))}
                </div>
              </section>
            )}

            {/* All Articles */}
            <section>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  📚 Tất cả bài viết
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 ml-8 rounded-full"></div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {regularBlogs.map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} />
                ))}
              </div>
            </section>
          </>
        )}

      </div>
    </div>
  );
};

export default BlogsPage;

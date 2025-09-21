// app/blogs/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

// ==============================
// TypeScript types
// ==============================
interface Blog {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: BlogSection[];
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featuredImage: string;
  gallery?: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  readTime: number;
  category: string;
}

interface BlogSection {
  type: "paragraph" | "heading" | "image" | "quote" | "list";
  content: string | string[];
  caption?: string;
}

interface BlogPageProps {
  params: {
    slug: string;
  };
}

// ==============================
// Enhanced blog data
// ==============================
const blogs: Blog[] = [
  {
    slug: "fpt-innovation",
    title: "FPT Innovation Path",
    subtitle: "Dẫn đầu cuộc cách mạng AI và chuyển đổi số tại Việt Nam",
    excerpt: "Chiến lược đổi mới của FPT năm 2025, tập trung vào AI và Digital Transformation với tầm nhìn trở thành công ty công nghệ hàng đầu khu vực.",
    content: [
      {
        type: 'paragraph',
        content: "FPT Corporation đang triển khai chiến lược đổi mới táo bạo nhằm trở thành công ty dẫn đầu về trí tuệ nhân tạo (AI) và chuyển đổi số tại Việt Nam. Với hơn 30 năm kinh nghiệm trong ngành công nghệ thông tin, FPT đã xác định AI là chìa khóa then chốt để mở ra kỷ nguyên mới của công nghệ."
      },
      {
        type: 'heading',
        content: "Đầu tư mạnh mẽ vào R&D và AI"
      },
      {
        type: 'paragraph',
        content: "Năm 2025, FPT đã dành 15% doanh thu cho hoạt động nghiên cứu và phát triển, tập trung vào các lĩnh vực AI, Machine Learning, và Internet of Things (IoT). Công ty đã thành lập FPT AI Center với hơn 500 chuyên gia AI hàng đầu, đồng thời hợp tác với các trường đại học danh tiếng như MIT, Stanford, và các tập đoàn công nghệ toàn cầu."
      },
      {
        type: 'image',
        content: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        caption: "FPT AI Center - Trung tâm nghiên cứu AI hiện đại nhất Việt Nam"
      },
      {
        type: 'heading',
        content: "Các sản phẩm AI đột phá"
      },
      {
        type: 'list',
        content: [
          "FPT.AI Conversation - Nền tảng chatbot thông minh phục vụ 10M+ người dùng",
          "Smart Logistics System - Tối ưu hóa chuỗi cung ứng bằng AI, giảm 30% chi phí vận chuyển",
          "FPT Health AI - Hệ thống chẩn đoán y tế thông minh với độ chính xác 95%",
          "Smart City Solutions - Giải pháp thành phố thông minh được triển khai tại 20+ tỉnh thành"
        ]
      },
      {
        type: 'quote',
        content: "Chúng tôi không chỉ đang xây dựng công nghệ cho hiện tại, mà đang tạo ra tương lai số cho Việt Nam và khu vực. AI không chỉ là công cụ, mà là người bạn đồng hành trong hành trình chuyển đổi số toàn diện."
      },
      {
        type: 'heading',
        content: "Tác động tích cực đến cộng đồng"
      },
      {
        type: 'paragraph',
        content: "Các sáng kiến đổi mới của FPT không chỉ nâng cao hiệu quả kinh doanh mà còn mang lại giá trị thiết thực cho xã hội. Chương trình 'AI for Good' đã đào tạo miễn phí cho hơn 50,000 sinh viên và kỹ sư về AI, góp phần xây dựng nguồn nhân lực số chất lượng cao cho đất nước."
      }
    ],
    publishedAt: "2025-09-21",
    updatedAt: "2025-09-21",
    tags: ["Innovation", "FPT", "AI", "Digital Transformation", "Technology"],
    featuredImage: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    author: {
      name: "Nguyễn Minh Anh",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bio: "Technology Writer & AI Specialist với hơn 8 năm kinh nghiệm trong lĩnh vực công nghệ và đổi mới sáng tạo."
    },
    readTime: 8,
    category: "Technology"
  },
  {
    slug: "startups-asia",
    title: "Startups in Asia 2025",
    subtitle: "Cơ hội vàng cho các startup công nghệ trong kỷ nguyên số",
    excerpt: "Phân tích chi tiết về thị trường startup Châu Á 2025, xu hướng đầu tư và những cơ hội đột phá cho các founder.",
    content: [
      {
        type: 'paragraph',
        content: "Thị trường startup Châu Á năm 2025 đang trải qua giai đoạn bùng nổ mạnh mẽ nhất trong lịch sử với tổng vốn đầu tư đạt kỷ lục 180 tỷ USD, tăng 45% so với năm trước. Sự phát triển này được thúc đẩy bởi ba yếu tố chính: công nghệ AI, chuyển đổi số, và thay đổi hành vi người tiêu dùng hậu pandemic."
      },
      {
        type: 'heading',
        content: "Các lĩnh vực startup hot nhất"
      },
      {
        type: 'list',
        content: [
          "Fintech & Digital Banking - Chiếm 35% tổng vốn đầu tư, với các unicorn như Grab Financial, VNG Pay",
          "AI & Machine Learning - 25% thị phần, tập trung vào automation và predictive analytics",
          "E-commerce & Social Commerce - 20%, đặc biệt phát triển mạnh ở Đông Nam Á",
          "HealthTech & Telemedicine - 15%, được đẩy mạnh sau đại dịch COVID-19",
          "EdTech & Online Learning - 5%, với mô hình hybrid learning"
        ]
      },
      {
        type: 'image',
        content: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        caption: "Startup ecosystem Châu Á đang phát triển với tốc độ chưa từng có"
      },
      {
        type: 'heading',
        content: "Thị trường đầu tư hấp dẫn nhất"
      },
      {
        type: 'paragraph',
        content: "Singapore tiếp tục dẫn đầu với 45 tỷ USD vốn đầu tư, theo sau là Trung Quốc (35 tỷ USD), Ấn Độ (32 tỷ USD), và Việt Nam (8 tỷ USD). Đặc biệt, Việt Nam đang nổi lên như một điểm sáng với tốc độ tăng trưởng 120% về số lượng startup nhận được vốn seed và series A."
      },
      {
        type: 'quote',
        content: "Châu Á đang trở thành epicenter của innovation toàn cầu. Những gì chúng ta chứng kiến không chỉ là sự phát triển của startup, mà là sự hình thành của một hệ sinh thái công nghệ hoàn toàn mới."
      },
      {
        type: 'heading',
        content: "Chiến lược thành công cho founder"
      },
      {
        type: 'paragraph',
        content: "Để thành công trong môi trường cạnh tranh khốc liệt này, các founder cần tập trung vào 4 yếu tố then chốt: Product-Market Fit mạnh mẽ, đội ngũ execution xuất sắc, chiến lược go-to-market sáng tạo, và khả năng scale nhanh chóng. Đặc biệt quan trọng là việc hiểu sâu về thị trường địa phương và xây dựng partnerships chiến lược."
      }
    ],
    publishedAt: "2025-08-15",
    tags: ["Startup", "Asia", "Investment", "Tech", "Funding"],
    featuredImage: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    author: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bio: "Venture Capital Partner và startup mentor với portfolio đầu tư hơn 100 startups Châu Á."
    },
    readTime: 10,
    category: "Investment"
  },
  {
    slug: "fundraising-guide",
    title: "Fundraising Guide for Founders",
    subtitle: "Bí quyết gọi vốn thành công từ Seed đến Series A",
    excerpt: "Hướng dẫn toàn diện về fundraising cho founder, từ chuẩn bị pitch deck đến đàm phán với nhà đầu tư.",
    content: [
      {
        type: 'paragraph',
        content: "Fundraising là một nghệ thuật phức tạp đòi hỏi sự chuẩn bị kỹ lưỡng và execution hoàn hảo. Với tỷ lệ thành công chỉ 0.5% cho các startup giai đoạn seed, việc hiểu rõ quy trình và chiến lược là yếu tố sống còn. Hướng dẫn này sẽ cung cấp roadmap chi tiết để tối đa hóa cơ hội thành công."
      },
      {
        type: 'heading',
        content: "Chuẩn bị trước khi gọi vốn"
      },
      {
        type: 'paragraph',
        content: "Trước khi tiếp cận bất kỳ nhà đầu tư nào, founder cần hoàn thiện 7 yếu tố cơ bản: Business model rõ ràng, Market size validation, Competitive advantage, Traction metrics, Financial projections, Team strength, và Exit strategy. Đặc biệt quan trọng là việc có được những early customers và revenue initial để chứng minh product-market fit."
      },
      {
        type: 'heading',
        content: "Pitch Deck hoàn hảo - 12 slides then chốt"
      },
      {
        type: 'list',
        content: [
          "Problem & Solution - Định nghĩa pain point và unique solution",
          "Market Opportunity - TAM, SAM, SOM analysis chi tiết",
          "Product Demo - Live demo hoặc video showcasing key features",
          "Business Model - Revenue streams và pricing strategy",
          "Traction & Growth - Key metrics, customer testimonials, growth trajectory",
          "Competition - Competitive landscape và differentiation",
          "Go-to-Market Strategy - Customer acquisition plan và scaling strategy",
          "Team - Founder background, key hires, advisory board",
          "Financial Projections - 3-year forecast, unit economics",
          "Funding Ask - Funding amount, use of funds, milestones",
          "Valuation & Terms - Valuation rationale, key deal terms",
          "Next Steps - Clear call-to-action và timeline"
        ]
      },
      {
        type: 'image',
        content: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        caption: "Một pitch deck chuyên nghiệp là chìa khóa mở cửa thành công"
      },
      {
        type: 'heading',
        content: "Chiến lược tiếp cận nhà đầu tư"
      },
      {
        type: 'paragraph',
        content: "Xây dựng target list 50-100 potential investors dựa trên sector focus, stage preference, check size, và portfolio companies. Ưu tiên warm introductions thông qua network, portfolio companies, hoặc mutual connections. Cold outreach chỉ nên chiếm 20% tổng efforts. Timing cũng rất quan trọng - tránh holiday seasons và end of fund periods."
      },
      {
        type: 'quote',
        content: "Fundraising is not just about getting money. It's about finding the right partners who can help you build a sustainable, scalable business. Choose your investors as carefully as they choose you."
      },
      {
        type: 'heading',
        content: "Due Diligence và Negotiation"
      },
      {
        type: 'paragraph',
        content: "Sau khi nhận được term sheet, quá trình due diligence sẽ kéo dài 4-8 tuần. Chuẩn bị data room với tất cả documents: legal incorporation, financial statements, customer contracts, IP documentation, employee agreements. Trong quá trình negotiation, tập trung vào valuation, board composition, liquidation preferences, và anti-dilution provisions."
      }
    ],
    publishedAt: "2025-07-10",
    tags: ["Fundraising", "Startup", "Guide", "Investment", "Venture Capital"],
    featuredImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    author: {
      name: "Sarah Kim",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b829?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bio: "Serial entrepreneur và investment banker với kinh nghiệm gọi vốn hơn 500M USD cho các startup."
    },
    readTime: 12,
    category: "Entrepreneurship"
  },
];
// ==============================
// Blog Page Component
// ==============================
const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  const renderContent = (section: BlogSection, index: number) => {
    switch (section.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
            {section.content}
          </p>
        );
      case "heading":
        return (
          <h2
            key={index}
            className="text-3xl font-bold mb-6 mt-12 text-gray-900 border-l-4 border-blue-600 pl-4"
          >
            {section.content}
          </h2>
        );
      case "image":
        return (
          <figure key={index} className="my-10">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={section.content as string}
                alt={section.caption || "Blog image"}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            {section.caption && (
              <figcaption className="text-center text-gray-600 mt-4 italic">
                {section.caption}
              </figcaption>
            )}
          </figure>
        );
      case "quote":
        return (
          <blockquote
            key={index}
            className="my-10 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-r-lg"
          >
            <p className="text-xl italic text-gray-800 leading-relaxed">
              &quot;{section.content}&quot;
            </p>
          </blockquote>
        );
      case "list":
        return (
          <ul key={index} className="mb-8 space-y-3">
            {(section.content as string[]).map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image src={blog.featuredImage} alt={blog.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <div className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
              {blog.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl">{blog.title}</h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl">{blog.subtitle}</p>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-6 mb-6 text-gray-600">
            <time className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {new Date(blog.publishedAt).toLocaleDateString("vi-VN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {blog.readTime} phút đọc
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full hover:from-blue-200 hover:to-indigo-200 transition-all duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author */}
          <div className="flex items-center justify-center gap-4 p-6 bg-white rounded-xl shadow-sm">
            <Image src={blog.author.avatar} alt={blog.author.name} width={60} height={60} className="rounded-full" />
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">{blog.author.name}</h3>
              <p className="text-gray-600 text-sm">{blog.author.bio}</p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <section className="prose-lg max-w-none">
          {blog.content.map((section, index) => renderContent(section, index))}
        </section>

        {/* Gallery */}
        {blog.gallery && blog.gallery.length > 0 && (
          <section className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Hình ảnh liên quan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blog.gallery.map((image, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Share Section */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Chia sẻ bài viết</h3>
            <div className="flex justify-center gap-4">
              {/* Buttons (Twitter, Facebook, LinkedIn) */}
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;

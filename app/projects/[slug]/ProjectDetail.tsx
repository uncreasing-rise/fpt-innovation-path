"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/app/types";
import { projectsData } from "@/app/types";
import { 
  Globe, Facebook, Linkedin, Twitter, Github,
  Calendar, MapPin, Award, TrendingUp,
  Download, Play, MessageCircle, ExternalLink,
  ChevronLeft, ChevronRight, Heart, Share2
} from "lucide-react";

type Props = {
  showSeeAll?: boolean;
  project: Project;
};

const smallCard = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.5 },
  }),
};

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function ProjectDetail({ project }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const detail = {
    tagline:
      "Giải pháp thông minh giúp tối ưu hoá vận hành & nâng cao trải nghiệm khách hàng bằng AI và dữ liệu thời gian thực.",
    overview:
      "Dự án này mang đến sự đổi mới cho ngành bằng cách ứng dụng công nghệ hiện đại nhằm giải quyết các vấn đề đã tồn tại từ lâu. Chúng tôi xây dựng một hệ sinh thái toàn diện với khả năng mở rộng cao, bảo mật tuyệt đối và trải nghiệm người dùng vượt trội.",
    
    // Thông tin cơ bản mở rộng
    basicInfo: {
      founded: "2022",
      location: "TP. Hồ Chí Minh, Việt Nam",
      employees: "50-100 nhân viên",
      stage: "Series A",
      category: "Enterprise SaaS",
      website: "https://example.com",
      status: "Đang hoạt động"
    },

    problem:
      "Các doanh nghiệp gặp khó khăn trong việc tối ưu chi phí vận hành (trung bình mất 35% chi phí không cần thiết), thiếu công cụ phân tích dữ liệu theo thời gian thực (80% quyết định dựa trên dữ liệu lỗi thời), và trải nghiệm khách hàng không nhất quán across multiple touchpoints.",
    
    solution:
      "Ứng dụng AI/ML engine tự học, IoT sensors network và Big Data analytics để tối ưu hoá quy trình real-time, tự động hoá 90% nghiệp vụ thủ công, và cung cấp 360-degree customer insights với predictive analytics.",

    // Metrics chi tiết hơn
    metrics: {
      users: "120,000+ MAU",
      revenue: "$4.3M ARR",
      growth: "178% YoY",
      retention: "72% NRR",
      nps: "67 NPS",
      uptime: "99.9% SLA"
    },

    // Key Performance Indicators
    kpis: [
      { metric: "Customer Acquisition Cost", value: "$89", change: "-23%" },
      { metric: "Lifetime Value", value: "$2,450", change: "+156%" },
      { metric: "Time to Value", value: "14 days", change: "-60%" },
      { metric: "Feature Adoption Rate", value: "84%", change: "+31%" }
    ],

    features: [
      { 
        title: "AI-Powered Analytics", 
        desc: "Báo cáo real-time, dự báo AI với 95% độ chính xác",
        icon: "📊"
      },
      { 
        title: "Smart Automation", 
        desc: "Tự động hoá quy trình với workflow engine",
        icon: "🤖"
      },
      { 
        title: "Enterprise Security", 
        desc: "Mã hoá end-to-end, SOC 2 Type II compliance",
        icon: "🔒"
      },
      { 
        title: "Seamless Integration", 
        desc: "200+ pre-built connectors cho ERP/CRM/Payment",
        icon: "🔗"
      },
      { 
        title: "Mobile-First Design", 
        desc: "Progressive Web App với offline capability",
        icon: "📱"
      },
      { 
        title: "Custom Dashboard", 
        desc: "Drag-and-drop builder với 50+ widgets",
        icon: "🎛️"
      }
    ],

    // Tính năng nâng cao
    advancedFeatures: [
      {
        category: "AI & Machine Learning",
        items: [
          "Predictive Analytics Engine",
          "Natural Language Processing",
          "Computer Vision Integration", 
          "Anomaly Detection System"
        ]
      },
      {
        category: "Integration & APIs",
        items: [
          "RESTful API với GraphQL support",
          "Webhook notifications",
          "Third-party marketplace",
          "Custom SDK cho mobile"
        ]
      },
      {
        category: "Security & Compliance", 
        items: [
          "GDPR & CCPA compliant",
          "Single Sign-On (SSO)",
          "Multi-factor Authentication",
          "Advanced audit logging"
        ]
      }
    ],

    caseStudy: {
      title: "BigRetail: Giảm 30% chi phí, tăng 2x hiệu suất",
      client: "BigRetail Chain (500+ cửa hàng)",
      challenge: "Quản lý inventory across 500 locations, forecast demand accuracy chỉ 45%",
      solution: "Deploy AI-powered inventory optimization với real-time demand sensing",
      results: [
        "30% reduction in operational costs ($2.1M saved annually)", 
        "2x faster order fulfillment (từ 48h xuống 24h)",
        "+18% customer NPS score improvement",
        "95% demand forecast accuracy (tăng từ 45%)",
        "40% reduction in stockouts"
      ],
      timeline: "Implementation trong 3 tháng, ROI positive sau 6 tháng"
    },

    // Thêm nhiều case studies
    additionalCases: [
      {
        client: "FastBank",
        industry: "Financial Services", 
        result: "50% faster loan processing, 99.7% fraud detection accuracy"
      },
      {
        client: "MedCenter",
        industry: "Healthcare",
        result: "25% improvement in patient satisfaction, 30% cost reduction"
      }
    ],

    milestones: [
      { year: "Q1 2022", text: "Ra mắt MVP với 5 founding customers", icon: "🚀" },
      { year: "Q3 2022", text: "Seed Round $1.2M (500 Startups, VNG)", icon: "💰" },
      { year: "Q1 2023", text: "Reach 10K users, expand to Singapore", icon: "📈" },
      { year: "Q4 2023", text: "Series A $5M (Sequoia Capital SEA)", icon: "🏆" },
      { year: "Q2 2024", text: "100K users, launch enterprise tier", icon: "🎯" },
      { year: "Q4 2024", text: "AI-powered features, SOC 2 certified", icon: "🤖" }
    ],

    // Roadmap tương lai
    roadmap: [
      { quarter: "Q1 2025", items: ["Voice AI Assistant", "Advanced Analytics"] },
      { quarter: "Q2 2025", items: ["Multi-language Support", "API Marketplace"] }, 
      { quarter: "Q3 2025", items: ["Blockchain Integration", "IoT Expansion"] },
      { quarter: "Q4 2025", items: ["IPO Preparation", "Global Expansion"] }
    ],

    customers: [
      { 
        name: "BigRetail", 
        logo: "https://placehold.co/160x60?text=BigRetail",
        testimonial: "Transformed our operations completely"
      },
      { 
        name: "FastBank", 
        logo: "https://placehold.co/160x60?text=FastBank",
        testimonial: "Best fintech solution we've used"  
      },
      { 
        name: "MedCenter", 
        logo: "https://placehold.co/160x60?text=MedCenter",
        testimonial: "Improved patient care significantly"
      }
    ],

    gallery: [
      {
        url: "https://placehold.co/1200x700/0a1a3f/fff?text=Dashboard+Overview",
        title: "Main Dashboard",
        description: "Real-time analytics và KPI monitoring"
      },
      {
        url: "https://placehold.co/1200x700/1e3a8a/fff?text=Mobile+App+UI", 
        title: "Mobile Experience",
        description: "Native mobile app với offline support"
      },
      {
        url: "https://placehold.co/1200x700/2563eb/fff?text=AI+Analytics",
        title: "AI Analytics",
        description: "Machine learning powered insights"
      },
      {
        url: "https://placehold.co/1200x700/7c3aed/fff?text=Integration+Hub",
        title: "Integration Center", 
        description: "200+ third-party integrations"
      }
    ],

    // Video demo
    demoVideo: {
      thumbnail: "https://placehold.co/800x450/0a1a3f/fff?text=Demo+Video",
      url: "https://youtube.com/watch?v=demo",
      duration: "3:42"
    },

    techStack: {
      frontend: ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Python", "GraphQL", "Prisma ORM"],  
      database: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse"],
      infrastructure: ["AWS", "Kubernetes", "Docker", "Terraform"],
      ai: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face"],
      monitoring: ["DataDog", "Sentry", "New Relic", "Grafana"]
    },

    // Pricing plans
    pricing: [
      {
        plan: "Startup",
        price: "$49/month", 
        features: ["Up to 10 users", "Basic analytics", "Email support"],
        popular: false
      },
      {
        plan: "Business", 
        price: "$199/month",
        features: ["Up to 100 users", "Advanced AI", "Priority support", "Custom integrations"],
        popular: true
      },
      {
        plan: "Enterprise",
        price: "Custom",
        features: ["Unlimited users", "White-label", "Dedicated support", "On-premise option"],
        popular: false
      }
    ],

    // Awards & Recognition
    awards: [
      {
        title: "Best Enterprise SaaS 2024",
        organization: "Vietnam Tech Awards", 
        year: "2024"
      },
      {
        title: "Top 50 AI Startups APAC",
        organization: "TechCrunch",
        year: "2024"  
      },
      {
        title: "Innovation Award",
        organization: "HCMC Tech Week",
        year: "2023"
      }
    ],

    press: [
      { 
        outlet: "TechNewsVN", 
        title: "Startup này đang đổi mới ngành logistics bằng AI",
        date: "Dec 2024",
        url: "#"
      },
      { 
        outlet: "VnExpress", 
        title: "Doanh nghiệp Việt tăng trưởng thần tốc tại khu vực", 
        date: "Nov 2024",
        url: "#"
      },
      {
        outlet: "TechCrunch",
        title: "Vietnamese startup raises $5M Series A",
        date: "Oct 2024", 
        url: "#"
      }
    ],

    team: [
      {
        name: "Nguyễn Văn A",
        role: "CEO & Co-founder",
        avatar: "https://placehold.co/120x120?text=CEO",
        bio: "Ex-Google, Stanford MBA. 10+ years in enterprise software.",
        linkedin: "https://linkedin.com/in/example"
      },
      {
        name: "Trần Thị B", 
        role: "CTO & Co-founder",
        avatar: "https://placehold.co/120x120?text=CTO",
        bio: "Ex-Meta AI team. PhD Computer Science from MIT.",
        linkedin: "https://linkedin.com/in/example"
      },
      {
        name: "Lê Văn C",
        role: "VP Product",
        avatar: "https://placehold.co/120x120?text=VP",
        bio: "Ex-Spotify, led 0-1 products. UC Berkeley CS.",
        linkedin: "https://linkedin.com/in/example" 
      },
      {
        name: "Phạm Thị D",
        role: "Head of AI",
        avatar: "https://placehold.co/120x120?text=AI", 
        bio: "Ex-OpenAI researcher. Published 20+ AI papers.",
        linkedin: "https://linkedin.com/in/example"
      }
    ],

    // Advisory board
    advisors: [
      {
        name: "John Smith",
        role: "Strategic Advisor", 
        company: "Ex-Salesforce VP",
        avatar: "https://placehold.co/120x120?text=ADV1"
      },
      {
        name: "Sarah Johnson", 
        role: "Technical Advisor",
        company: "Ex-Amazon Principal Engineer",
        avatar: "https://placehold.co/120x120?text=ADV2"  
      }
    ],

    // Funding information  
    funding: {
      totalRaised: "$6.2M",
      rounds: [
        { round: "Seed", amount: "$1.2M", date: "Sep 2022", lead: "500 Startups" },
        { round: "Series A", amount: "$5M", date: "Dec 2023", lead: "Sequoia Capital SEA" }
      ],
      investors: ["Sequoia Capital", "500 Startups", "VNG", "Jungle Ventures"]
    },

    socials: {
      website: "https://example.com",
      facebook: "https://facebook.com/example", 
      linkedin: "https://linkedin.com/company/example",
      twitter: "https://twitter.com/example",
      github: "https://github.com/example"
    },

    // App download links
    appLinks: {
      ios: "https://apps.apple.com/app/example",
      android: "https://play.google.com/store/apps/example",
      web: "https://app.example.com"
    },

    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://example.com/app",

    // Contact information
    contact: {
      email: "hello@example.com",
      phone: "+84 28 1234 5678", 
      address: "Tầng 15, Bitexco Financial Tower, Quận 1, TP.HCM"
    }
  };

  const related = projectsData
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === detail.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? detail.gallery.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO SECTION - Enhanced */}
      <header className="relative bg-gradient-to-br from-[#0a1a3f] via-[#1e3a8a] to-[#2563eb] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl p-3 shadow-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold mb-2">{project.name}</h1>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {detail.basicInfo.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Founded {detail.basicInfo.founded}
                    </span>
                    <span className="px-3 py-1 bg-green-500 rounded-full text-xs font-semibold">
                      {detail.basicInfo.status}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">{detail.tagline}</p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#0a1a3f] px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
                <button className="border border-white/30 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors">
                  <Download className="w-5 h-5" />
                  Get Started
                </button>
                <div className="flex items-center gap-3">
                  <button className="p-3 border border-white/30 rounded-xl hover:bg-white/10 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-3 border border-white/30 rounded-xl hover:bg-white/10 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="relative">
                <Image
                  src={detail.gallery[0].url}
                  alt="Product showcase"
                  width={1200}
                  height={700}
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* NAVIGATION TABS */}
      <nav className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'features', label: 'Features' }, 
              { id: 'metrics', label: 'Metrics' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'team', label: 'Team' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'contact', label: 'Contact' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#0a1a3f] text-[#0a1a3f]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* ENHANCED METRICS DASHBOARD */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionFade}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-[#0a1a3f] mb-8 text-center">Key Metrics & Performance</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {Object.entries(detail.metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="bg-gradient-to-br from-[#0a1a3f] to-[#2563eb] text-white p-6 rounded-xl shadow-lg">
                  <p className="text-2xl font-bold mb-1">{value}</p>
                  <p className="text-sm opacity-90 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.kpis.map((kpi, index) => (
              <motion.div
                key={kpi.metric}
                custom={index}
                variants={smallCard}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <p className="text-sm text-gray-600 mb-1">{kpi.metric}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold">{kpi.value}</p>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    kpi.change.startsWith('+') 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {kpi.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ENHANCED FEATURES SECTION */}
        <div>
          <h2 className="text-3xl font-bold text-[#0a1a3f] mb-4">Core Features</h2>
          <p className="text-gray-600 mb-10">Powerful tools designed to transform your business operations</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detail.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index}
                variants={smallCard}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-[#0a1a3f] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Advanced Features */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#0a1a3f] mb-8">Advanced Capabilities</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {detail.advancedFeatures.map((category) => (
                <div key={category.category} className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold mb-4 text-lg">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#0a1a3f] rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ENHANCED CASE STUDY */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-[#0a1a3f]" />
            <h2 className="text-3xl font-bold text-[#0a1a3f]">Success Story</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">{detail.caseStudy.title}</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <span className="font-semibold text-[#0a1a3f]">Client: </span>
                  {detail.caseStudy.client}
                </div>
                <div>
                  <span className="font-semibold text-[#0a1a3f]">Challenge: </span>
                  {detail.caseStudy.challenge}
                </div>
                <div>
                  <span className="font-semibold text-[#0a1a3f]">Solution: </span>
                  {detail.caseStudy.solution}
                </div>
                <div>
                  <span className="font-semibold text-[#0a1a3f]">Timeline: </span>
                  {detail.caseStudy.timeline}
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Key Results:</h4>
              <div className="space-y-3">
                {detail.caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <TrendingUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ENHANCED GALLERY WITH CAROUSEL */}
        <div>
          <h2 className="text-3xl font-bold text-[#0a1a3f] mb-8">Product Gallery</h2>
          
          <div className="relative mb-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={detail.gallery[currentImageIndex].url}
                alt={detail.gallery[currentImageIndex].title}
                width={1200}
                height={700}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-1">
                  {detail.gallery[currentImageIndex].title}
                </h3>
                <p className="text-sm opacity-90">
                  {detail.gallery[currentImageIndex].description}
                </p>
              </div>
            </div>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {detail.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative overflow-hidden rounded-lg ${
                  index === currentImageIndex ? 'ring-4 ring-[#0a1a3f]' : 'hover:opacity-80'
                } transition-all cursor-pointer`}
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  width={300}
                  height={80}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* TECH STACK - Enhanced */}
        <div>
          <h2 className="text-3xl font-bold text-[#0a1a3f] mb-8">Technology Stack</h2>
          
          <div className="space-y-8">
            {Object.entries(detail.techStack).map(([category, technologies]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-4 capitalize text-gray-700">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:border-[#0a1a3f] hover:text-[#0a1a3f] transition-colors cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRICING SECTION */}
        <div>
          <h2 className="text-3xl font-bold text-[#0a1a3f] mb-4 text-center">Pricing Plans</h2>
          <p className="text-gray-600 text-center mb-10">Choose the perfect plan for your business needs</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {detail.pricing.map((plan) => (
              <div
                key={plan.plan}
                className={`relative p-8 rounded-2xl border-2 ${
                  plan.popular
                    ? 'border-[#0a1a3f] bg-[#0a1a3f] text-white'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.plan}</h3>
                  <div className="text-3xl font-bold mb-1">{plan.price}</div>
                  {plan.price !== "Custom" && <p className="text-sm opacity-70">per month</p>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? 'bg-white text-[#0a1a3f]' : 'bg-green-100 text-green-600'
                      }`}>
                        <span className="text-xs">✓</span>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-white text-[#0a1a3f] hover:bg-gray-100'
                    : 'bg-[#0a1a3f] text-white hover:bg-[#1e3a8a]'
                }`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ENHANCED TEAM SECTION */}
        <div>
          <h2 className="text-3xl font-bold text-[#0a1a3f] mb-8">Meet Our Team</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {detail.team.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-shadow">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="w-24 h-24 mx-auto rounded-full mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-[#0a1a3f] font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                <Link 
                  href={member.linkedin}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Link>
              </div>
            ))}
          </div>

          {/* Advisory Board */}
          <div>
            <h3 className="text-2xl font-bold text-[#0a1a3f] mb-6">Advisory Board</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {detail.advisors.map((advisor) => (
                <div key={advisor.name} className="bg-gray-50 p-6 rounded-xl flex items-center gap-4">
                  <Image
                    src={advisor.avatar}
                    alt={advisor.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">{advisor.name}</h4>
                    <p className="text-sm text-[#0a1a3f] font-medium">{advisor.role}</p>
                    <p className="text-sm text-gray-600">{advisor.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FUNDING & INVESTORS */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#0a1a3f] mb-8">Funding & Investors</h2>
          
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-[#0a1a3f] mb-2">
                  {detail.funding.totalRaised}
                </div>
                <p className="text-gray-600">Total Funding Raised</p>
              </div>
              
              <div className="space-y-4">
                {detail.funding.rounds.map((round) => (
                  <div key={round.round} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold">{round.round}</div>
                      <div className="text-sm text-gray-600">{round.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[#0a1a3f]">{round.amount}</div>
                      <div className="text-sm text-gray-600">Led by {round.lead}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Key Investors</h3>
              <div className="grid grid-cols-2 gap-4">
                {detail.funding.investors.map((investor) => (
                  <div key={investor} className="p-4 border border-gray-200 rounded-lg text-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                    <div className="font-medium text-sm">{investor}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ROADMAP */}
        <div>
          <h2 className="text-3xl font-bold text-[#0a1a3f] mb-8">Product Roadmap</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.roadmap.map((quarter) => (
              <div key={quarter.quarter} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg mb-4 text-[#0a1a3f]">{quarter.quarter}</h3>
                <ul className="space-y-2">
                  {quarter.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#0a1a3f] rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* AWARDS & RECOGNITION */}
        <div>
          <h2 className="text-3xl font-bold text-[#0a1a3f] mb-8">Awards & Recognition</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {detail.awards.map((award) => (
              <div key={award.title} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">{award.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{award.organization}</p>
                <p className="text-sm font-medium text-[#0a1a3f]">{award.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PRESS & MEDIA */}
        <div>
          <h2 className="text-3xl font-bold text-[#0a1a3f] mb-8">Press & Media</h2>
          
          <div className="space-y-6">
            {detail.press.map((article) => (
              <div key={article.title} className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between">
                <div>
                  <h3 className="font-bold mb-2">{article.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="font-medium text-[#0a1a3f]">{article.outlet}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
                <Link href={article.url} className="text-[#0a1a3f] hover:text-blue-600">
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ENHANCED CONTACT & DOWNLOAD SECTION */}
        <div className="bg-gradient-to-r from-[#0a1a3f] to-[#2563eb] text-white p-10 rounded-2xl">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
              <p className="text-lg mb-8 opacity-90">
                Ready to transform your business? Download our app or get in touch with our team.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>{detail.contact.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  <span>{detail.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>📞</span>
                  <span>{detail.contact.phone}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href={detail.socials.website} className="hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8" />
                </Link>
                <Link href={detail.socials.facebook} className="hover:scale-110 transition-transform">
                  <Facebook className="w-8 h-8" />
                </Link>
                <Link href={detail.socials.linkedin} className="hover:scale-110 transition-transform">
                  <Linkedin className="w-8 h-8" />
                </Link>
                <Link href={detail.socials.twitter} className="hover:scale-110 transition-transform">
                  <Twitter className="w-8 h-8" />
                </Link>
                <Link href={detail.socials.github} className="hover:scale-110 transition-transform">
                  <Github className="w-8 h-8" />
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Download Our App</h3>
              
              <div className="flex justify-center mb-6">
                <Image 
                  src={detail.qrCode} 
                  alt="QR Code" 
                  width={160}
                  height={160}
                  className="w-40 h-40 bg-white rounded-2xl p-4" 
                />
              </div>
              
              <p className="mb-6 opacity-90">Scan QR code or download directly:</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={detail.appLinks.ios}
                  className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors"
                >
                  <span>📱</span>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </Link>
                <Link 
                  href={detail.appLinks.android}
                  className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors"
                >
                  <span>🤖</span>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </Link>
                <Link 
                  href={detail.appLinks.web}
                  className="bg-white text-[#0a1a3f] px-6 py-3 rounded-xl flex items-center gap-3 font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  Open Web App
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PROJECTS */}
        <div>
          <h2 className="text-3xl font-bold text-[#0a1a3f] mb-8">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((relatedProject) => (
              <Link
                href={`/projects/${relatedProject.slug}`}
                key={relatedProject.slug}
                className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-xl hover:border-[#0a1a3f] transition-all group"
              >
                <Image 
                  src={relatedProject.logo} 
                  alt={relatedProject.name} 
                  width={64}
                  height={64}
                  className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" 
                />
                <h3 className="font-bold text-lg mb-2 group-hover:text-[#0a1a3f]">
                  {relatedProject.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {relatedProject.description || "Discover more innovative solutions"}
                </p>
                <div className="flex items-center text-[#0a1a3f] font-medium text-sm">
                  Learn More <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export interface Project {
  slug: string;
  name: string;
  description: string;
  logo: string;
  tags: string[];
  funding: { stage: string; amount: string };
  achievement: string;
}

export const projectsData: Project[] = [
  {
    slug: "project-alpha",
    name: "Project Alpha",
    description: "Nền tảng AI tối ưu hóa chuỗi cung ứng...",
    logo: "https://placehold.co/100x100/1e3a8a/ffffff/png?text=A",
    tags: ["AI", "Logistics", "B2B SaaS"],
    funding: { stage: "Series A", amount: "$5M" },
    achievement: "Giảm 30% chi phí vận hành cho các đối tác lớn.",
  },
  {
    slug: "fintech-x",
    name: "FinTech X",
    description: "Ứng dụng quản lý tài chính cá nhân thông minh...",
    logo: "https://placehold.co/100x100/1d4ed8/ffffff/png?text=FX",
    tags: ["FinTech", "B2C", "Mobile App"],
    funding: { stage: "Seed Round", amount: "$1.2M" },
    achievement: "Hơn 100,000 người dùng hoạt động hàng tháng.",
  },
  {
    slug: "health-plus",
    name: "Health+",
    description: "Giải pháp theo dõi sức khỏe từ xa cho người cao tuổi...",
    logo: "https://placehold.co/100x100/2563eb/ffffff/png?text=H%2B",
    tags: ["HealthTech", "IoT", "Wearable"],
    funding: { stage: "Pre-seed", amount: "$500K" },
    achievement: "Hợp tác thành công với 5 bệnh viện lớn.",
  },
];

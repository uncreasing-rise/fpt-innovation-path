import type { Metadata } from "next";
import Projects from "@/app/components/Projects"; // dùng alias @ thay vì ../

export const metadata: Metadata = {
  title: "Danh sách Dự án | FPT Innovation Path",
  description:
    "Khám phá danh sách các dự án tiêu biểu trong hệ sinh thái FPT Innovation Path. Những startup đã và đang gặt hái thành công.",
};

// Phải export mặc định một React component
export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Ở trang full thì không hiện nút "Xem tất cả" */}
      <Projects showSeeAll={false} />
    </main>
  );
}

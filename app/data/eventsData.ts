// app/data/events.ts
// Shared event data + types for Events pages/components

export type Speaker = {
  name: string;
  title: string;
  img: string; // phải là URL hợp lệ
};

export type ScheduleItem = {
  time: string;
  activity: string;
};

export type Event = {
  id: string;
  img: string; // URL hợp lệ
  date: string; // YYYY-MM-DD
  time: string;
  title: string;
  description: string;
  longDescription: string;
  eventType: string;
  location: string;
  speakers: Speaker[];
  schedule: ScheduleItem[];
  partners: string[]; // URL hoặc tên partner
  registerLink: string; // URL hợp lệ
};

export const eventsData: Event[] = [
  {
    id: "pitching-day-2025",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
    date: "2025-10-15",
    time: "8:00 AM - 5:00 PM",
    title: "FPT Pitching Day 2025",
    description:
      "Cơ hội cho các startup trình bày ý tưởng đột phá trước hội đồng các nhà đầu tư và chuyên gia công nghệ hàng đầu.",
    longDescription:
      "FPT Pitching Day là sự kiện thường niên lớn nhất của FPT Innovation Path, nơi quy tụ những startup tiềm năng nhất và các quỹ đầu tư mạo hiểm hàng đầu trong khu vực. Đây không chỉ là một cuộc thi, mà còn là một ngày hội của sự đổi mới, nơi các nhà sáng lập có thể kết nối, học hỏi và tìm kiếm cơ hội bứt phá cho dự án của mình.",
    eventType: "Pitching",
    location: "Hội trường A, FPT Tower, TP.HCM",
    speakers: [
      {
        name: "Mr. John Doe",
        title: "CEO, TechCorp",
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1740&auto=format&fit=crop",
      },
      {
        name: "Ms. Jane Smith",
        title: "Partner, VN Ventures",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1887&auto=format&fit=crop",
      },
    ],
    schedule: [
      { time: "8:00 AM", activity: "Check-in & Networking" },
      { time: "9:00 AM", activity: "Khai mạc & Keynote" },
      { time: "10:00 AM", activity: "Phiên Pitching Bảng A" },
      { time: "12:00 PM", activity: "Ăn trưa & Giao lưu" },
      { time: "2:00 PM", activity: "Phiên Pitching Bảng B" },
      { time: "4:00 PM", activity: "Công bố kết quả & Trao giải" },
    ],
    partners: [
      "https://via.placeholder.com/150?text=TechCorp",
      "https://via.placeholder.com/150?text=VN+Ventures",
      "https://via.placeholder.com/150?text=Startup+Vietnam+Foundation",
    ],
    registerLink: "#",
  },
  {
    id: "growth-hacking-workshop-2025",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1740&auto=format&fit=crop",
    date: "2025-09-21",
    time: "2:00 PM - 5:00 PM",
    title: "Workshop: Growth Hacking 101",
    description:
      "Khám phá các chiến lược tăng trưởng đột phá cho sản phẩm của bạn với các chuyên gia marketing hàng đầu trong ngành.",
    longDescription:
      "Trong buổi workshop 3 tiếng này, bạn sẽ được trang bị những kiến thức và công cụ cần thiết để xây dựng một cỗ máy tăng trưởng cho startup của mình. Từ A/B testing, viral loops đến tối ưu hóa phễu người dùng, chuyên gia Alex Growth sẽ chia sẻ những bí quyết thực chiến nhất.",
    eventType: "Workshop",
    location: "Online via Zoom",
    speakers: [
      {
        name: "Mr. Alex Growth",
        title: "Marketing Expert",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop",
      },
    ],
    schedule: [
      { time: "2:00 PM", activity: "Giới thiệu về Growth Hacking" },
      { time: "2:45 PM", activity: "Case Study: Các chiến dịch thành công" },
      { time: "3:30 PM", activity: "Q&A và thực hành" },
    ],
    partners: [
      "https://via.placeholder.com/150?text=FPT+University",
      "https://via.placeholder.com/150?text=Google+for+Startups",
    ],
    registerLink: "#",
  },
];

export const getEventById = (id: string) =>
  eventsData.find((e) => e.id === id);

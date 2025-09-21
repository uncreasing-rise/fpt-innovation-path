"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Linkedin, Github, Twitter, X } from "lucide-react";
import Image from "next/image";

// Team data
const teamData = [
  {
    name: "Nguyễn Thụy Hồng Phúc",
    role: "Chủ nhiệm CLB",
    img: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/483964847_1657058324902165_965789814664845294_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFlhIoxHGNpH75UEz0gTIJjE7PQ6yKVGo4Ts9DrIpUajgaq4aSzLNuMKVv196uPCbdKf61Yy3dzXWRWlRdiZlWk&_nc_ohc=SYuuncAk0ZEQ7kNvwGSvnHE&_nc_oc=AdlnulUo-ZeO0w-w5u8dDWZo7PskRB0VwVOqqGxpHnqqXZmWpQlRb7sBWKm7KgOo6fmDK1Tf0qfsaP6Xgt6TzjpP&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=Ndo8qc8zYiKjijvtUqPBgg&oh=00_Afa7l_oo_2Fx8_YwKha-e_oBkEs_1rKy5jnPYgwVVhHt-A&oe=68D5BDE5",
    bio: "Với kinh nghiệm 5 năm trong lĩnh vực AI, Anh Phúc dẫn dắt FIP với tầm nhìn đưa công nghệ Việt ra thế giới.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Trần Minh Hằng",
    role: "Trưởng ban Chuyên môn",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1887&auto=format&fit=crop",
    bio: "Chuyên gia về Product Management, Minh Hằng giúp các đội startup xây dựng và hoàn thiện sản phẩm.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Lê Quốc Bảo",
    role: "Trưởng ban Sự kiện",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1740&auto=format&fit=crop",
    bio: "Quốc Bảo là người đứng sau thành công của các sự kiện Pitching Day và Networking Night hoành tráng.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Phạm Thuỳ Linh",
    role: "Trưởng ban Truyền thông",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    bio: "Linh xây dựng hình ảnh và kết nối FIP với cộng đồng startup qua các kênh truyền thông sáng tạo.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
];

// --- Team Card ---
const TeamCard = ({
  member,
  index,
  onClick,
}: {
  member: typeof teamData[0];
  index: number;
  onClick: () => void;
}) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative text-center bg-white p-6 rounded-xl shadow-lg border border-slate-200/80 h-full flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
<div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full">
  <Image
    src={member.img}
    alt={member.name}
    fill
    className="object-cover scale-120 transition-transform duration-300"
    sizes="128px"
  />
</div>

      <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
      <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
    </motion.div>
  );
};

// --- Team Detail Modal ---
const TeamDetailModal = ({
  member,
  onClose,
}: {
  member: typeof teamData[0] | null;
  onClose: () => void;
}) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl p-8 max-w-lg w-full relative shadow-xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-900"
        >
          <X size={24} />
        </button>
        <div className="relative w-40 h-40 mx-auto mb-6">
          <Image
            src={member.img}
            alt={member.name}
            fill
            className="rounded-full object-cover shadow-md"
            sizes="160px"
          />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 text-center">
          {member.name}
        </h3>
        <p className="text-blue-600 font-semibold text-center mb-4">
          {member.role}
        </p>
        <p className="text-slate-600 mb-4 text-center">{member.bio}</p>
        <div className="flex justify-center space-x-4">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin />
            </a>
          )}
          {member.social.github && (
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              <Github />
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-500 transition-colors"
            >
              <Twitter />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

// --- Main Team Component ---
const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamData[0] | null>(
    null
  );

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section id="team" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 text-center">
            Đội Ngũ Dẫn Dắt
          </h2>
          <p className="text-lg text-slate-600 mb-16 text-center max-w-3xl mx-auto">
            Gặp gỡ những người truyền lửa, những chuyên gia đầy nhiệt huyết đang đồng hành và định hướng cho các startup tại FPT Innovation Path.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamData.map((member, index) => (
            <TeamCard
              key={index}
              member={member}
              index={index}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <TeamDetailModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </section>
  );
};

export default Team;

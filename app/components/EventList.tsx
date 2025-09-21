"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { colors } from "@/app/theme";

type Event = {
  id: string;
  img: string;
  date: string;
  title: string;
  description: string;
  eventType: string;
  location: string;
  speakers: { name: string; title: string; img: string }[];
};

// --- UTILITY: EVENT STATUS ---
const getEventStatus = (eventDate: string) => {
  const now = new Date();
  const date = new Date(eventDate);
  now.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  if (date < now)
    return { text: "Đã kết thúc", bg: colors.bg.eventEnded, textColor: colors.text.light };
  if (date.getTime() === now.getTime())
    return {
      text: "Đang diễn ra",
      bg: colors.bg.eventOngoing,
      textColor: `${colors.text.light} animate-pulse`,
    };
  return { text: "Sắp diễn ra", bg: colors.bg.eventUpcoming, textColor: colors.text.light };
};

// --- EVENT CARD ---
const EventCard = ({
  event,
  onSelect,
  index,
}: {
  event: Event;
  onSelect: () => void;
  index: number;
}) => {
  const status = getEventStatus(event.date);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`bg-white rounded-xl overflow-hidden flex flex-col group border border-slate-200/80 ${colors.shadow.card}`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={event.img}
          alt={event.title}
          width={400}
          height={208}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div
          className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${status.bg} ${status.textColor}`}
        >
          {status.text}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
          {event.eventType}
        </span>
        <h3 className="font-bold text-xl my-2 text-slate-800 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow">{event.description}</p>
        <div className="mt-auto">
          <button
            onClick={onSelect}
            className="font-semibold text-blue-600 hover:text-blue-800 transition flex items-center self-start group-hover:gap-2"
          >
            Xem chi tiết{" "}
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN EVENT LIST ---
const EventList = ({
  events,
  onSelectEvent,
}: {
  events: Event[];
  onSelectEvent: (id: string) => void;
}) => {
  const containerVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} onSelect={() => onSelectEvent(event.id)} index={index} />
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link
          href="/events"
          className={`inline-block px-10 py-4 rounded-lg text-lg font-bold text-white ${colors.bg.primary} ${colors.bg.primaryHover} ${colors.shadow.button} ${colors.shadow.buttonHover} transition transform hover:scale-105`}
        >
          Xem Toàn Bộ Lịch Sự Kiện
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default EventList;

"use client";

import React from "react";
import { eventsData } from "../data/eventsData";
import EventList from "@/app/components/EventList";
import { useRouter } from "next/navigation";

const EventsPage: React.FC = () => {
  const router = useRouter();

  return (
    <section id="events" className="py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 text-center">
          Sự Kiện Nổi Bật
        </h2>
        <p className="text-lg text-slate-600 mb-16 text-center max-w-3xl mx-auto">
          Nơi kiến thức, kết nối và cơ hội hội tụ. Đừng bỏ lỡ những sự kiện quan trọng sắp tới của FPT Innovation Path.
        </p>

        <EventList
          events={eventsData}
          onSelectEvent={(id) => router.push(`/events/${id}`)}
        />
      </div>
    </section>
  );
};

export default EventsPage;

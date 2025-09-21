"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { eventsData } from "../data/eventsData";

const EventsPage: React.FC = () => {
  return (
    <section id="events" className="py-28 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 text-center">
          Sự Kiện Nổi Bật
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {eventsData.map((event) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col border"
              whileHover={{ scale: 1.02 }}
            >
              {/* Sử dụng Next.js Image */}
              <div className="relative w-full h-52">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={true}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  {event.eventType}
                </span>
                <h3 className="font-bold text-xl my-2 text-slate-800">
                  {event.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">
                  {event.description}
                </p>
                <Link
                  href={`/events/${event.id}`}
                  className="font-semibold text-blue-600 hover:text-blue-800 flex items-center"
                >
                  Xem chi tiết
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;

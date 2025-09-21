"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Users } from 'lucide-react';

// Define types for props for better maintainability
type Event = {
    id: string;
    img: string;
    date: string;
    title: string;
    description: string;
    eventType: string;
    location: string;
    speakers: { name: string; title: string; img: string; }[];
};

// --- UTILITY TO GET EVENT STATUS ---
const getEventStatus = (eventDate: string) => {
    const now = new Date("2025-09-21T09:00:00.000Z");
    const date = new Date(eventDate);
    now.setHours(0,0,0,0);
    date.setHours(0,0,0,0);

    if (date < now) {
        return { text: "Đã kết thúc", color: "bg-gray-500", textColor: "text-gray-100" };
    }
    if (date.getTime() === now.getTime()) {
        return { text: "Đang diễn ra", color: "bg-red-500", textColor: "text-white animate-pulse" };
    }
    return { text: "Sắp diễn ra", color: "bg-blue-500", textColor: "text-white" };
};

// --- EVENT CARD SUB-COMPONENT ---
const EventCard = ({ event, onSelect, index }: { event: Event, onSelect: () => void, index: number }) => {
    const status = getEventStatus(event.date);

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, delay: index * 0.1 }
        }
    };

    return (
        <motion.div 
            variants={cardVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col group border border-slate-200/80"
        >
            <div className="relative overflow-hidden">
                <img src={event.img} alt={event.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${status.color} ${status.textColor}`}>
                    {status.text}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{event.eventType}</span>
                <h3 className="font-bold text-xl my-2 text-slate-800 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">{event.description}</p>
                <div className="mt-auto">
                    <button onClick={onSelect} className="font-semibold text-blue-600 hover:text-blue-800 transition flex items-center self-start group-hover:gap-2">
                        Xem chi tiết <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

// --- MAIN EVENT LIST COMPONENT ---
const EventList = ({ events, onSelectEvent }: { events: Event[], onSelectEvent: (id: string) => void }) => {
    
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    };
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

            
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
                <a href="#" className="bg-slate-900 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-slate-700 transform transition-all duration-300 hover:scale-105 inline-block shadow-lg">
                    Xem Toàn Bộ Lịch Sự Kiện
                </a>
            </motion.div>
        </motion.div>
    );
};

export default EventList;

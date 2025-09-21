"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowLeft,
  Ticket,
  Building,
  Share2,
  Heart,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import type { Event } from "@/app/types";

// Skeleton loaders
const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

const SpeakerSkeleton = () => (
  <div className="animate-pulse text-center">
    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-16 mx-auto mb-1"></div>
    <div className="h-3 bg-gray-200 rounded w-12 mx-auto"></div>
  </div>
);

// Image component with fallback
const ImageWithFallback: React.FC<{
  src: string;
  alt: string;
  className: string;
  fallbackSrc?: string;
}> = ({ src, alt, className, fallbackSrc = "/placeholder-event.jpg" }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setImgSrc(fallbackSrc);
    setHasError(true);
    setIsLoading(false);
  };
  const handleLoad = () => setIsLoading(false);

  return (
    <div className="relative w-full">
      {isLoading && (
        <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
          <div className="text-gray-400">Loading...</div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${isLoading ? "hidden" : "block"}`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
      {hasError && (
        <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs flex items-center">
          <AlertCircle className="w-3 h-3 mr-1" />
          Fallback image
        </div>
      )}
    </div>
  );
};

// Speaker card
const SpeakerCard: React.FC<{ speaker: { name: string; title: string; img: string }; index: number }> = ({
  speaker,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="text-center group hover:scale-105 transition-all duration-200"
  >
    <ImageWithFallback
      src={speaker.img}
      alt={speaker.name}
      className="w-20 h-20 rounded-full mx-auto mb-2 object-cover border-2 border-transparent group-hover:border-blue-300"
      fallbackSrc="/placeholder-avatar.jpg"
    />
    <p className="font-medium text-gray-900">{speaker.name}</p>
    <p className="text-xs text-gray-500">{speaker.title}</p>
  </motion.div>
);

const EventDetail: React.FC<{ event: Event }> = ({ event }) => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);

  if (!event) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <AlertCircle className="w-16 h-16 text-red-400 mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Event Not Found</h2>
        <p className="text-gray-600 mb-4">The requested event could not be found.</p>
        <button
          onClick={() => router.back()}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </button>
      </div>
    );
  }

  // Structured data for SEO
  const eventStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.longDescription,
    startDate: event.date,
    location: { "@type": "Place", name: event.location },
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: event.eventType?.includes("Online")
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    organizer: { "@type": "Organization", name: "Event Organizer" },
    offers: {
      "@type": "Offer",
      url: event.registerLink,
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: event.title, text: event.longDescription, url: window.location.href });
      } catch (err) {
        setShareMenuOpen(!shareMenuOpen);
      }
    } else {
      setShareMenuOpen(!shareMenuOpen);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>{event.title} - Event Details</title>
        <meta name="description" content={event.longDescription} />
        <meta property="og:title" content={event.title} />
        <meta property="og:description" content={event.longDescription} />
        <meta property="og:image" content={event.img} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventStructuredData) }} />
      </Head>

      <div className="w-full min-h-screen bg-slate-50 flex flex-col py-8 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full bg-white shadow-lg rounded-2xl p-6 md:p-8 lg:p-12 flex flex-col gap-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 rounded-lg px-2 py-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại
            </button>

            <div className="flex items-center gap-3 relative">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-all duration-200 ${
                  isLiked ? "bg-red-100 text-red-600 hover:bg-red-200" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              </button>

              <div className="relative">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-200"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                {shareMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute right-0 top-12 bg-white shadow-lg rounded-lg p-2 z-10 min-w-[120px]"
                  >
                    <button
                      onClick={copyToClipboard}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm"
                    >
                      Copy Link
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Title & Image */}
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="w-full lg:w-1/2">
              <ImageWithFallback
                src={event.img}
                alt={event.title}
                className="w-full h-80 lg:h-[32rem] rounded-xl object-cover shadow-md"
              />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <h1 id="event-title" className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {event.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">{event.longDescription}</p>

              {/* Info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">{event.time}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">{event.location}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Building className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">{event.eventType}</span>
                </div>
              </div>

              {/* Register button */}
              <motion.a
                href={event.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Ticket className="w-5 h-5 mr-2" />
                Đăng ký tham gia
                <ExternalLink className="w-4 h-4 ml-2" />
              </motion.a>
            </div>
          </div>

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                Diễn giả
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
                {event.speakers.map((speaker, i) => (
                  <SpeakerCard key={i} speaker={speaker} index={i} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Schedule */}
          {event.schedule && event.schedule.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-600" />
                Lịch trình
              </h2>
              <div className="space-y-4">
                {event.schedule.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border-l-4 border-blue-600 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold min-w-fit">
                      {item.time}
                    </div>
                    <div className="text-gray-700 font-medium">{item.activity}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Partners */}
          {event.partners && event.partners.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-2xl font-bold mb-6">Đối tác</h2>
              <div className="flex flex-wrap gap-8 items-center justify-center lg:justify-start w-full">
                {event.partners.map((logo, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="relative group"
                  >
                    <ImageWithFallback
                      src={logo}
                      alt={`Partner ${i + 1}`}
                      className="h-12 lg:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                      fallbackSrc="/placeholder-logo.png"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default EventDetail;

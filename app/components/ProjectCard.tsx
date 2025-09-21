"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import type { Project } from "../data/projectsData";

// --- Icon ---
const DollarSignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 mr-3 text-green-600 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const TargetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <path d="M12 2v2M12 22v-2M22 12h-2M2 12h2" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.15, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-200 hover:border-blue-600"
    >
      {/* Logo + Name */}
      <div className="flex items-start mb-6">
        <Image
          src={project.logo}
          alt={`${project.name} logo`}
          width={64}
          height={64}
          className="w-16 h-16 mr-6 rounded-lg shadow-sm border border-gray-200 bg-gray-50 object-contain"
        />
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={`${project.slug}-tag-${i}`}
                className="text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>

      {/* Funding + Achievement */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <DollarSignIcon />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {project.funding.stage}
            </p>
            <p className="text-xs text-gray-500">
              Đã kêu gọi: {project.funding.amount}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <TargetIcon />
          <div>
            <p className="text-sm font-semibold text-gray-900">Thành tựu chính</p>
            <p className="text-xs text-gray-500">{project.achievement}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Link
        href={`/projects/${project.slug}`}
        className="font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center mt-auto self-start group"
      >
        Tìm hiểu thêm
        <ArrowRightIcon />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
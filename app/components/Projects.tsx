"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectBackground from "./ProjectBackground";
import { projectsData } from "../data/projectsData";

type ProjectsProps = {
  showSeeAll?: boolean; // optional, mặc định true
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const Projects: React.FC<ProjectsProps> = ({ showSeeAll = true }) => {
  return (
    <section
      id="projects"
      className="relative py-28 bg-white text-gray-900 overflow-hidden"
    >
      {/* Background effect */}
      <ProjectBackground />

      <div className="container relative z-10 mx-auto px-6">
        {/* --- Heading --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-center text-navy">
            Dự Án Nổi Bật
          </h2>
          <p className="text-lg text-gray-700 mb-16 text-center max-w-3xl mx-auto">
            Khám phá những startup tiêu biểu đã trưởng thành và gặt hái thành công
            từ hệ sinh thái{" "}
            <span className="font-semibold text-navy">FPT Innovation Path</span>.
          </p>
        </motion.div>

        {/* --- Grid Projects --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>

        {/* --- See All button --- */}
        {showSeeAll && (
          <div className="mt-16 text-center">
            <motion.a
              href="/projects"
              className="inline-block px-8 py-3 rounded-xl font-semibold text-white bg-blue-900 hover:bg-blue-800 shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Xem tất cả dự án →
            </motion.a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

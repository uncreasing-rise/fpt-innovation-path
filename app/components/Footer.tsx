"use client";

import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Twitter, Linkedin, Github, ArrowUp } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const footerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-[#071228] text-slate-300 text-sm">
      {/* 3D Canvas as subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
        <Canvas
          camera={{ position: [0, 1.2, 3], fov: 45 }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 4, 2]} intensity={1} />
          <directionalLight position={[-4, -2, -2]} intensity={0.25} />

          {/* Float makes object gently bob/rotate */}
          <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.6}>
            <SpinningObject />
          </Float>

          {/* Ground shadow to anchor visually */}
          <ContactShadows position={[0, -1.2, 0]} opacity={0.45} scale={6} blur={2} />

          {/* Keep controls but disable user interaction */}
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      <motion.div
        className="container mx-auto px-6 py-8"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-white mb-2">FPT INNOVATION PATH</h3>
            <p className="max-w-md text-slate-300 leading-relaxed">
              Bệ phóng cho ý tưởng khởi nghiệp đột phá — kết nối founders, nhà đầu tư và chuyên gia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-2">Điều Hướng</h4>
            <ul className="space-y-1.5">
              <li><a href="#home" className="hover:text-blue-300 transition">Trang Chủ</a></li>
              <li><a href="#about" className="hover:text-blue-300 transition">Về Chúng Tôi</a></li>
              <li><a href="#events" className="hover:text-blue-300 transition">Sự Kiện</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition">Liên Hệ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-2">Liên Hệ</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@fptinnovationpath.com" className="hover:text-blue-300 transition">info@fptinnovationpath.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Ho Chi Minh City, Vietnam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-center sm:text-left text-slate-400">
            &copy; {new Date().getFullYear()} FPT Innovation Path. Cùng nhau kiến tạo tương lai.
          </p>

          <div className="flex items-center space-x-3 mt-3 sm:mt-0">
            <a href="#" aria-label="Twitter" className="p-2 rounded-full hover:bg-blue-600/20 transition">
              <Twitter className="w-4 h-4 text-slate-300" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-blue-600/20 transition">
              <Linkedin className="w-4 h-4 text-slate-300" />
            </a>
            <a href="#" aria-label="GitHub" className="p-2 rounded-full hover:bg-blue-600/20 transition">
              <Github className="w-4 h-4 text-slate-300" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 p-1.5 rounded-full bg-slate-700 hover:bg-blue-600 text-white transition"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

/* ----------------------
   Small 3D scene internals
   (placed in same file for simplicity)
   ---------------------- */

function SpinningObject() {
  // We create a low-poly geometry with some noise-like look
  // Use useRef to rotate manually for subtle extra motion
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.2 * delta; // slow rotate
      mesh.current.rotation.x += 0.08 * delta;
    }
  });

  // A compound geometry for a bit of visual interest (icosahedron + inner wire)
  return (
    <group position={[0, -0.3, 0]}>
      <mesh ref={mesh} scale={0.9}>
        <icosahedronGeometry args={[0.9, 0]} />
        <MeshWobbleMaterial factor={0.6} speed={1.2} color="#0ea5e9" envMapIntensity={0.8} metalness={0.3} roughness={0.35} />
      </mesh>

      {/* subtle wireframe ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} scale={[1.6, 1, 1]}>
        <torusGeometry args={[1.6, 0.01, 8, 64]} />
        <meshBasicMaterial color="#60a5fa" toneMapped={false} opacity={0.18} transparent />
      </mesh>
    </group>
  );
}

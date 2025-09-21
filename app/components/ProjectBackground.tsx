"use client";
import React from "react";

const ProjectBackground: React.FC = () => (
  <>
    {/* Vùng trên: navy đậm */}
    <div
      className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, #0a1a3f 0%, transparent 70%)",
      }}
    />
    {/* Vùng dưới: xanh lam navy nhạt hơn */}
    <div
      className="absolute bottom-0 right-0 w-full h-1/2 opacity-15 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, #1e3a8a 0%, transparent 70%)",
      }}
    />
  </>
);

export default ProjectBackground;

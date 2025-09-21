"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MovingGrid = () => {
  const gridRef = useRef<THREE.GridHelper>(null);
  const planeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (gridRef.current?.material) {
      // Animate the grid material's offset to create a scrolling effect
      (gridRef.current.material as THREE.Material).userData.shader.uniforms.time.value = clock.getElapsedTime();
    }
  });
  
  const gridSize = 100;
  const gridDivisions = 100;

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float time;
    varying vec2 vUv;
    
    void main() {
      vec2 p = vUv * 10.0;
      float intensity = 0.0;
      intensity += pow(fract(p.x * 2.0 + time * 0.2), 20.0);
      intensity += pow(fract(p.y * 2.0 + time * 0.2), 20.0);

      gl_FragColor = vec4(vec3(0.5, 0.7, 1.0) * intensity, intensity * 0.2);
    }
  `;
  
  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
       <mesh ref={planeRef} position={[0, -0.1, 0]}>
         <planeGeometry args={[gridSize, gridSize]} />
         <shaderMaterial
            transparent
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{ time: { value: 0 } }}
         />
       </mesh>
    </group>
  );
};


const GridBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
      <Canvas camera={{ position: [0, 5, 0], fov: 75 }}>
        <MovingGrid />
      </Canvas>
    </div>
  );
};

export default GridBackground;
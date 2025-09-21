"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Crystal = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
            meshRef.current.rotation.x += delta * 0.1;
        }
    });

    return (
        <mesh ref={meshRef}>
            <octahedronGeometry args={[2.5, 0]} />
            <meshStandardMaterial 
                color="#a78bfa"
                emissive="#8b5cf6"
                emissiveIntensity={0.5}
                metalness={0.9}
                roughness={0.1}
                transparent
                opacity={0.8}
            />
        </mesh>
    );
};

const InnovationCrystal: React.FC = () => {
    return (
        <div className="w-full h-[400px] md:h-full cursor-pointer">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <pointLight position={[-5, -5, -5]} intensity={2} color="#60a5fa" />
                <Crystal />
            </Canvas>
        </div>
    );
};

export default InnovationCrystal;

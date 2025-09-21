"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GlobeVisualization = () => {
    const groupRef = useRef<THREE.Group>(null);

    // Tạo các điểm và đường nối một lần duy nhất
    const { points, lines } = useMemo(() => {
        const pointCount = 2000;
        const radius = 3;
        const points = [];
        const positions = new Float32Array(pointCount * 3);

        // Tạo các điểm ngẫu nhiên trên mặt cầu
        for (let i = 0; i < pointCount; i++) {
            const phi = Math.acos(-1 + (2 * i) / pointCount);
            const theta = Math.sqrt(pointCount * Math.PI) * phi;
            const point = new THREE.Vector3();
            point.setFromSphericalCoords(radius, phi, theta);
            points.push(point);
            point.toArray(positions, i * 3);
        }

        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = [];
        // Tạo các đường nối giữa các điểm gần nhau
        for (let i = 0; i < pointCount; i++) {
            for (let j = i + 1; j < pointCount; j++) {
                const p1 = points[i];
                const p2 = points[j];
                const distance = p1.distanceTo(p2);
                if (distance < 0.5) { // Chỉ nối các điểm gần
                    linePositions.push(p1.x, p1.y, p1.z);
                    linePositions.push(p2.x, p2.y, p2.z);
                }
            }
        }
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

        return { points: positions, lines: lineGeometry };
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1; // Tự động xoay nhẹ
            groupRef.current.rotation.x += delta * 0.02;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Các đường nối */}
            <lineSegments geometry={lines}>
                <lineBasicMaterial color="#3b82f6" transparent opacity={0.2} />
            </lineSegments>
            {/* Các điểm (nodes) */}
            <points>
                <bufferGeometry attach="geometry">
                    <bufferAttribute attach="attributes-position" args={[points, 3]} />
                </bufferGeometry>
                <pointsMaterial color="#93c5fd" size={0.02} sizeAttenuation />
            </points>
        </group>
    );
};

const NetworkGlobe = () => {
    return (
        <div className="w-full h-full min-h-[400px] md:min-h-0">
            <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <GlobeVisualization />
            </Canvas>
        </div>
    );
};

export default NetworkGlobe;
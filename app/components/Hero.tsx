"use client";

import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion, Variants } from 'framer-motion';

// --- 3D COMPONENTS (DATA PLEXUS CONCEPT) ---

// Starfield background element
function Starfield() {
    const ref = useRef<THREE.Points>(null);

    const sphere = useMemo(() => {
        const positions = new Float32Array(5000 * 3);
        for (let i = 0; i < positions.length; i++) {
            positions[i] = (Math.random() - 0.5) * 150;
        }
        return positions;
    }, []);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 100;
            ref.current.rotation.y -= delta / 150;
        }
    });

    return (
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#4a5568"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    );
}

// Data Plexus component
function DataPlexus() {
    const groupRef = useRef<THREE.Group>(null);

    // Create the points (nodes) and connecting lines
    const { nodes, lines } = useMemo(() => {
        const numNodes = 300;
        const nodePositions = new Float32Array(numNodes * 3);
        const points: THREE.Vector3[] = [];

        // Distribute nodes in a box volume
        for (let i = 0; i < numNodes; i++) {
            const x = (Math.random() - 0.5) * 15;
            const y = (Math.random() - 0.5) * 15;
            const z = (Math.random() - 0.5) * 15;
            nodePositions[i * 3] = x;
            nodePositions[i * 3 + 1] = y;
            nodePositions[i * 3 + 2] = z;
            points.push(new THREE.Vector3(x, y, z));
        }

        const lineGeometry = new THREE.BufferGeometry();
        const linePositions: number[] = [];
        
        // Connect nodes that are close to each other
        for (let i = 0; i < numNodes; i++) {
            for (let j = i + 1; j < numNodes; j++) {
                const p1 = points[i];
                const p2 = points[j];
                const distance = p1.distanceTo(p2);
                if (distance < 2.5) {
                    linePositions.push(p1.x, p1.y, p1.z);
                    linePositions.push(p2.x, p2.y, p2.z);
                }
            }
        }
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

        return { nodes: nodePositions, lines: lineGeometry };
    }, []);

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {/* The nodes */}
            <Points positions={nodes} stride={3} frustumCulled={false}>
                 <PointMaterial
                    transparent
                    color="#a78bfa"
                    size={0.1}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
            {/* The connecting lines */}
            <lineSegments geometry={lines}>
                <lineBasicMaterial color="#60a5fa" transparent opacity={0.15} />
            </lineSegments>
        </group>
    );
}

function EnhancedScene() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(({ mouse }) => {
        if (groupRef.current) {
            // Mouse interaction for looking through the data cloud
            groupRef.current.rotation.y += (mouse.x * 0.3 - groupRef.current.rotation.y) * 0.05;
            groupRef.current.rotation.x += (-mouse.y * 0.3 - groupRef.current.rotation.x) * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[0, 5, 5]} intensity={0.8} color="#ffffff" />
            <Starfield />
            <DataPlexus />
        </group>
    );
}

const Hero = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    return (
        <section id="home" className="relative h-screen w-full bg-[#0a192f] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Canvas camera={{ position: [0, 0, 10], fov: 75 }} dpr={[1, 1.5]}>
                    <Suspense fallback={null}>
                        <EnhancedScene />
                    </Suspense>
                </Canvas>
            </div>

            {/* Vignette overlay for text readability */}
            <div className="absolute inset-0 z-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-black/70"></div>

            <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
                <motion.div
                    className="text-center px-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black mb-3 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        FPT INNOVATION PATH
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-xl md:text-2xl text-cyan-200 font-mono tracking-wider mb-8">
                        From launching to legend
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
                        Bệ phóng cho những <span className="text-cyan-300 font-medium">ý tưởng khởi nghiệp</span> đột phá.
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        <a href="#about" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-10 rounded-lg text-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 inline-block shadow-lg shadow-blue-600/40">
                            Khám Phá Hành Trình
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
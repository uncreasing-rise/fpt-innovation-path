"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion'; // Import Variants
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Apply the Variants type to fix the TypeScript error
    const buttonVariants: Variants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { duration: 0.3, ease: 'easeOut' }
        },
        exit: { 
            opacity: 0, 
            y: 20, 
            scale: 0.8,
            transition: { duration: 0.2, ease: 'easeIn' }
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 hover:scale-110 active:scale-95"
                    aria-label="Go to top"
                >
                    <ChevronUp className="w-6 h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;


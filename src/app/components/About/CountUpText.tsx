'use client';

import React, { useEffect, useState } from "react";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CountUpText = () => {
    const [countOn, setCountOn] = useState(false);
    const [counts, setCounts] = useState([0, 0, 0]);
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const counterData = [
        { target: 30000, label: "Collection" },
        { target: 2490, label: "Sales" },
        { target: 15800, label: "Distribution" }
    ];

    useEffect(() => {
        if (isInView) {
            setCountOn(true);
        }
    }, [isInView]);

    useEffect(() => {
        if (countOn) {
            const timers = counterData.map((item, index) => {
                let step = 0;
                const steps = 60;
                const increment = item.target / steps;
                const duration = 3000;

                return setInterval(() => {
                    step++;
                    setCounts(prev => {
                        const newCounts = [...prev];
                        newCounts[index] = Math.floor(increment * step);
                        return newCounts;
                    });
                    
                    if (step >= steps) {
                        setCounts(prev => {
                            const newCounts = [...prev];
                            newCounts[index] = item.target;
                            return newCounts;
                        });
                        clearInterval(timers[index]);
                    }
                }, duration / steps);
            });

            return () => timers.forEach(timer => clearInterval(timer));
        }
    }, [countOn, counterData]);

    const formatNumber = (num: number) => {
        return num.toLocaleString();
    };

    return (
        <div ref={ref} className="lg:py-10 bg-red-600 rounded-2xl">
            <div className="mx-auto px-4">
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, staggerChildren: 0.2 }}
                >
                    {counterData.map((item, index) => (
                        <motion.div 
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: (index + 1) * 0.1 }}
                        >
                            <div className="backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 border-opacity-20">
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                    {formatNumber(counts[index])}
                                </div>
                                <p className="text-lg font-medium text-white">
                                    {item.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default CountUpText;

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CompanyFeatures = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        {
            title: "Our Team",
            description: "Fruits has more than 650 employees and more than 1000 collaborators working together to deliver excellence."
        },
        {
            title: "Partnerships", 
            description: "We cooperate with NGOs, government agencies, and other national and international institutions."
        },
        {
            title: "Logistics & Distribution",
            description: "Our distribution and logistics are handled by our valuable staff - logistics professionals with modern vehicles and equipment."
        },
        {
            title: "Wholesale Sales",
            description: "Wholesale is done through our sales warehouses and staff that serves and supports a large number of other sellers and businesses."
        },
        {
            title: "Global Export",
            description: "Export is carried out through our experienced export units, exporting to Balkans, EU, and other countries worldwide."
        },
        {
            title: "Quality Assurance",
            description: "We maintain the highest standards of quality control and food safety throughout our entire supply chain and production process."
        }
    ];

    return (
        <section ref={ref} className="py-10">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        What Makes Us <span className="text-red-600">Special</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Founded in 1958, we've grown from a small family business to a leading company in the industry, 
                        delivering excellence through innovation and dedication.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.1 
                            }}
                        >
                            {/* Content */}
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyFeatures;

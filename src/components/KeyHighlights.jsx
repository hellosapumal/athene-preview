import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './KeyHighlights.css';

const KeyHighlights = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const highlights = [
        {
            icon: (
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
            ),
            title: '24/7 Monitoring',
            description: 'Continuous CCTV and alarm oversight from our secure control center.',
        },
        {
            icon: (
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
            title: 'Highly Trained Guards',
            description: 'Background-checked, licensed, and certified personnel.',
        },
        {
            icon: (
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
            ),
            title: 'Fast Response Time',
            description: 'GPS-tracked patrols with real-time incident reporting.',
        },
    ];

    return (
        <section className="key-highlights py-20" ref={ref}>
            <div className="container">
                <motion.div
                    className="highlights-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            className="highlight-card card"
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: '0 20px 40px -10px rgba(255, 122, 26, 0.2)',
                            }}
                        >
                            <div className="highlight-icon">
                                {highlight.icon}
                            </div>
                            <h3 className="highlight-title">{highlight.title}</h3>
                            <p className="highlight-description">{highlight.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default KeyHighlights;

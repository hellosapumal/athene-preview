import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './WhyChoose.css';

const Counter = ({ value, suffix = '' }) => {
    const ref = useRef(null);
    const [count, setCount] = useState(0);
    const motionValue = useMotionValue(0);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, value, {
                duration: 2,
                ease: 'easeOut',
                onUpdate: (latest) => setCount(Math.round(latest)),
            });
            return controls.stop;
        }
    }, [isInView, motionValue, value]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
};

const WhyChoose = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const features = [
        'Background-checked guards',
        'Continuous training programs',
        'ISO-aligned procedures',
        'GPS-tracked vehicles',
        '24/7 control center',
        'Real-time incident reporting',
        'Insured & licensed',
    ];

    const stats = [
        { number: 12, suffix: '+', label: 'Years in Operation' },
        { number: 350, suffix: '+', label: 'Sites Protected' },
        { number: 5200, suffix: '+', label: 'Incidents Responded' },
        { number: 98, suffix: '%', label: 'Client Satisfaction' },
    ];

    return (
        <section className="why-choose py-20" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                >
                    <h2>Why Choose Athene Guard Security</h2>
                    <p>Excellence in every aspect of security service delivery</p>
                </motion.div>

                <div className="why-choose-content">
                    <motion.div
                        className="why-choose-features"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Our Differentiators</h3>
                        <ul className="features-list">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <svg fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                        <motion.a
                            href="/about#standards"
                            className="btn btn-secondary mt-6"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            See Our Safety Standards
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="why-choose-stats"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="stat-item"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="stat-number">
                                        <Counter value={stat.number} suffix={stat.suffix} />
                                    </div>
                                    <div className="stat-label">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;

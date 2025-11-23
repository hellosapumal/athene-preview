import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './ExperienceBlock.css';

const ExperienceBlock = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const blocks = [
        {
            title: 'Our Experience',
            description: 'Decades of combined security experience across corporate, residential and event protection.',
            link: '/about#experience',
        },
        {
            title: 'Our History',
            description: 'Founded by field operators who built systems that balance human judgment with modern tech.',
            link: '/about#history',
        },
        {
            title: 'Our Vision',
            description: 'To set the standard for service-driven security across the region.',
            link: '/about#vision',
        },
    ];

    return (
        <section className="experience-block py-20" ref={ref}>
            <div className="container">
                <motion.div
                    className="experience-grid"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {blocks.map((block, index) => (
                        <motion.div
                            key={index}
                            className="experience-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="experience-icon">
                                {index === 0 && (
                                    <svg fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                )}
                                {index === 1 && (
                                    <svg fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                )}
                                {index === 2 && (
                                    <svg fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                            <h3>{block.title}</h3>
                            <p>{block.description}</p>
                            <motion.a
                                href={block.link}
                                className="experience-link"
                                whileHover={{ x: 5 }}
                            >
                                Learn More
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceBlock;

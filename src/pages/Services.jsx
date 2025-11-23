import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import './Services.css';

const Services = () => {
    const servicesRef = useRef(null);
    const isServicesInView = useInView(servicesRef, { once: true, margin: '-100px' });

    const serviceCategories = [
        {
            title: 'Static Guarding & On-Site Security',
            icon: (
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                </svg>
            ),
            services: [
                { name: 'Static Guard Services', description: 'Professional security officers for offices, factories, residences, and commercial sites.' },
                { name: 'Multi-Story & Complex Security', description: 'Specialized teams for large sites and high-rise buildings.' },
                { name: 'Site Patrols & Monitoring', description: 'Regular inspections and active surveillance for enhanced protection.' },
                { name: 'Gatehouse & Access Control', description: 'Strict entry management to ensure only authorized access.' },
                { name: 'Crowd Control & Event Security', description: 'Trained officers for concerts, exhibitions, and public gatherings.' },
                { name: 'Bodyguard & VIP Protection', description: 'Discreet, professional personal security for executives and individuals.' },
                { name: 'Customer Service Support', description: 'Security staff trained in reception and concierge duties.' },
            ],
        },
        {
            title: 'Corporate Security Solutions',
            icon: (
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
            ),
            services: [
                { name: 'Executive & Personal Protection', description: 'Security escorts for high-profile individuals.' },
                { name: 'Corporate Security Personnel', description: 'Dedicated officers for office, retail, and industrial environments.' },
                { name: 'Risk Mitigation', description: 'Fraud, theft, and stock loss prevention.' },
                { name: 'Electronic Countermeasures', description: 'Debugging and anti-surveillance solutions.' },
                { name: 'Concierge & Reception Security', description: 'Frontline officers combining security with customer service.' },
                { name: 'Security Consultancy', description: 'Risk assessments, audits, and security surveys tailored to your business.' },
            ],
        },
        {
            title: 'Private Investigation Services',
            icon: (
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                </svg>
            ),
            services: [
                { name: 'Surveillance Operations', description: 'Professional monitoring for intelligence gathering.' },
                { name: 'Undercover Operations', description: 'Covert security to identify risks and threats.' },
                { name: 'Fraud & Theft Investigations', description: 'Detecting internal or external misconduct.' },
                { name: 'Locating Missing Persons', description: 'Specialized tracking and investigative methods.' },
            ],
        },
        {
            title: 'Technical & Electronic Security',
            icon: (
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
            ),
            services: [
                { name: 'CCTV System Design & Installation', description: 'Tailored surveillance systems for any scale.' },
                { name: 'Alarm & Intrusion Systems', description: 'Motion sensors, perimeter alarms, and access alerts.' },
                { name: 'Biometric Access Control', description: 'Face/fingerprint readers and smart entry systems.' },
                { name: 'Intercom & Communication Systems', description: 'Integrated solutions for secure communications.' },
                { name: 'Electric Fencing & Perimeter Security', description: 'Physical barriers enhanced with electronic systems.' },
                { name: 'System Design & Commissioning', description: 'Customized solutions from planning to execution.' },
            ],
        },
    ];

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="services-hero-overlay"></div>
                <motion.div
                    className="container services-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Our Services</h1>
                    <p>Comprehensive security solutions combining highly trained professionals with advanced technology</p>
                </motion.div>
            </section>

            {/* Introduction */}
            <section className="services-intro py-20">
                <div className="container">
                    <motion.div
                        className="intro-content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>
                            At Athene Guard Security (AGS), we offer a comprehensive range of security solutions that combine highly trained professionals with advanced technology. Our services are designed to protect people, property, and information across corporate, government, and private sectors.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Categories */}
            <section className="service-categories py-20 bg-light" ref={servicesRef}>
                <div className="container">
                    {serviceCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="service-category"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                        >
                            <div className="category-header">
                                <div className="category-icon">{category.icon}</div>
                                <h2>{category.title}</h2>
                            </div>

                            <div className="services-list">
                                {category.services.map((service, serviceIndex) => (
                                    <motion.div
                                        key={serviceIndex}
                                        className="service-item card"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={isServicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                        transition={{ duration: 0.4, delay: categoryIndex * 0.2 + serviceIndex * 0.1 }}
                                        whileHover={{ x: 8, boxShadow: 'var(--shadow-lg)' }}
                                    >
                                        <div className="service-bullet"></div>
                                        <div className="service-content">
                                            <h3>{service.name}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Need a Custom Security Solution?</h2>
                        <p>Our team is ready to design a tailored security plan that meets your specific needs</p>
                        <div className="cta-buttons">
                            <motion.a
                                href="/contact"
                                className="btn btn-primary btn-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Request Consultation
                            </motion.a>
                            <motion.a
                                href="/about"
                                className="btn btn-secondary btn-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More About Us
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;

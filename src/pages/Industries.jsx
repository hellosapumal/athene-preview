import { motion } from 'framer-motion';
import './Industries.css';

const Industries = () => {
    const industries = [
        {
            title: 'Corporate & Financial Institutions',
            items: ['Banks, offices, and corporate headquarters', 'Protection of assets, employees, and confidential data'],
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Government & Diplomatic Institutions',
            items: ['Ministries, embassies, and public facilities', 'High-security operations with disciplined teams'],
            image: 'https://unsplash.com/photos/DYkN0YTOigU/download?force=true&w=800',
        },
        {
            title: 'Manufacturing & Industrial Zones',
            items: ['Factories, warehouses, and logistic centers', 'Loss prevention, access control, and site patrols'],
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Retail & Commercial Spaces',
            items: ['Shopping malls, showrooms, and supermarkets', 'Theft prevention, crowd management, and customer service support'],
            image: 'https://unsplash.com/photos/JWptMV0DiUU/download?force=true&w=800',
        },
        {
            title: 'Hospitality & Tourism',
            items: ['Hotels, resorts, and leisure facilities', 'Guest safety, event security, and concierge services'],
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Healthcare & Medical Facilities',
            items: ['Hospitals, clinics, and pharmaceutical sites', 'Patient, staff, and asset protection with specialized protocols'],
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Residential Complexes',
            items: ['Housing developments and private properties', '24/7 protection, patrols, and access management'],
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Events & Entertainment',
            items: ['Concerts, exhibitions, and sports events', 'Crowd control, VIP protection, and incident response'],
            image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
        },
    ];

    return (
        <div className="industries-page">
            {/* Hero Section */}
            <section className="industries-hero">
                <div className="industries-hero-overlay"></div>
                <motion.div
                    className="container industries-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Industries We Serve</h1>
                    <p>Tailored security solutions across diverse sectors</p>
                </motion.div>
            </section>

            {/* Introduction */}
            <section className="industries-intro py-20">
                <div className="container">
                    <motion.div
                        className="intro-content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>
                            Athene Guard Security provides tailored security solutions across a wide range of industries. Our team understands that every sector faces unique risks, and we customize our services to address those challenges with professionalism and efficiency.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="industries-grid-section py-20 bg-light">
                <div className="container">
                    <div className="industries-grid">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                className="industry-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -12, boxShadow: 'var(--shadow-2xl)' }}
                            >
                                <div className="industry-card-background" style={{ backgroundImage: `url(${industry.image})` }}>
                                    <div className="industry-card-overlay"></div>
                                </div>
                                <div className="industry-card-content">
                                    <h2>{industry.title}</h2>
                                    <ul className="industry-items">
                                        {industry.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <svg fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="industries-cta">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Secure Your Industry with AGS</h2>
                        <p>Let us design a security solution tailored to your sector's unique challenges</p>
                        <div className="cta-buttons">
                            <motion.a
                                href="/contact"
                                className="btn btn-primary btn-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Industry-Specific Quote
                            </motion.a>
                            <motion.a
                                href="/services"
                                className="btn btn-secondary btn-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Our Services
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Industries;

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ImageModal from '../components/ImageModal';
import './About.css';

const About = () => {
    const storyRef = useRef(null);
    const visionRef = useRef(null);
    const valuesRef = useRef(null);
    const leadershipRef = useRef(null);

    const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' });
    const isVisionInView = useInView(visionRef, { once: true, margin: '-100px' });
    const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
    const isLeadershipInView = useInView(leadershipRef, { once: true, margin: '-100px' });

    const [modalImage, setModalImage] = useState(null);

    const openModal = (imageSrc, imageAlt) => {
        setModalImage({ src: imageSrc, alt: imageAlt });
    };

    const closeModal = () => {
        setModalImage(null);
    };

    const coreValues = [
        {
            title: 'Integrity',
            description: 'Acting with honesty, accountability, and transparency in everything we do.',
            icon: (
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            title: 'Vigilance',
            description: 'Remaining alert and proactive in identifying and addressing potential threats.',
            icon: (
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
            ),
        },
        {
            title: 'Excellence',
            description: 'Striving for the highest standards in training, service, and technology.',
            icon: (
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <motion.div
                    className="container about-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>About Athene Guard Security</h1>
                    <p>Protection with Precision — Trusted Since 2012</p>
                </motion.div>
            </section>

            {/* Our Story */}
            <section className="about-story py-20" ref={storyRef}>
                <div className="container">
                    <motion.div
                        className="story-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Our Story</h2>
                        <div className="story-text">
                            <p>
                                Athene Guard Security (Pvt) Ltd. is a highly professional private security company based in Colombo, Sri Lanka. We are dedicated to delivering the highest quality security services with a long-term commitment to our clients.
                            </p>
                            <p>
                                Our team is made up of experienced operatives, military officers, police officers, and civil security experts. Many of our senior officers have served in Sri Lanka's national security forces during critical times of the country's history. This background allows us to provide well-trained, disciplined, and highly motivated security officers who bring unmatched expertise to the industry.
                            </p>
                            <p>
                                We are uniquely positioned to support or manage your entire security program through a customized and collaborative approach. By combining our experienced management with advanced security technology, we deliver maximum protection, real-time reporting, and seamless operations that enhance the efficiency of your security program.
                            </p>
                            <p>
                                Through our Integrated Guarding Solutions, clients can combine different security services to create tailored packages that meet their specific needs and budgets. This approach not only increases protection but also ensures cost efficiency, wider coverage, and a unified security service.
                            </p>
                            <p>
                                We are committed to maintaining the highest standards of integrity, discipline, and professionalism. Over the years, we have earned the trust of corporate clients, government institutions, and private organizations by providing reliable, customized, and cost-effective security solutions.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="vision-mission py-20 bg-dark" ref={visionRef}>
                <div className="container">
                    <div className="vision-mission-grid">
                        <motion.div
                            className="vision-card"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isVisionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="vm-icon">
                                <svg fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be the most trusted provider of professional security solutions in Sri Lanka, delivering protection with integrity, vigilance, and excellence.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mission-card"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isVisionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="vm-icon">
                                <svg fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                Our mission is to create safe environments for our clients by applying proactive and reactive risk management strategies, ensuring peace of mind through the expertise of our professionally supervised teams.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="core-values py-20" ref={valuesRef}>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    >
                        <h2>Our Core Values</h2>
                        <p>The principles that guide everything we do</p>
                    </motion.div>

                    <div className="values-grid">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                className="value-card card"
                                initial={{ opacity: 0, y: 50 }}
                                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="leadership py-20 bg-light" ref={leadershipRef}>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isLeadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    >
                        <h2>Leadership & Management</h2>
                        <p>Guided by experience, driven by excellence</p>
                    </motion.div>

                    <motion.div
                        className="leadership-profile"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLeadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="profile-image">
                            <img src="/chairman-portrait.png" alt="Maj. Gen. Srinath Rajapakse" />
                        </div>
                        <div className="profile-content">
                            <div className="profile-header">
                                <h3>Maj. Gen. Srinath Rajapakse</h3>
                                <p className="profile-credentials">RWP, RSP, USP, NDU (Retd)</p>
                                <p className="profile-title">Chairman / Managing Director</p>
                            </div>
                            <div className="profile-bio">
                                <p>
                                    Major General (Retd.) Srinath Rajapakse is a distinguished leader with a career that spans both military service and the corporate world. His early years as an avid sportsman at St. Sylvester's College, Kandy, laid the foundation for the discipline, teamwork, and perseverance that would define his future success.
                                </p>
                                <p>
                                    He began his military career with the Ceylon Light Infantry Regiment before joining the elite Commando Squadron of the Sri Lanka Army. He is a Graduate of the US Army Ranger school and a US-trained paratrooper. Followed many other special Courses in India, Pakistan, and China. He was a National Champion of Practical Pistol shooting and Captain of the Sri Lanka Team to Australia and Singapore.
                                </p>
                                <p>
                                    Rising through the ranks, he went on to become a Major General and was later appointed Colonel of the Commando Regiment, serving as a guiding figure and mentor to generations of commandos. His decades of service to the nation reflect his commitment to integrity, leadership, and operational excellence.
                                </p>
                                <p>
                                    He held many key appointments, served in the East and North during the war. Last command appointment he held was as the Security Force Commander in the eastern part of Sri Lanka. After retiring from the Army, General Rajapakse transitioned into the corporate sector, where he has successfully applied his leadership and strategic expertise to building high-performance teams and organizations.
                                </p>
                                <p>
                                    Beyond his corporate contributions, he is also the President of the Nuwara Eliya Golf Club, one of Asia's oldest and most prestigious golf clubs with a history of over 130 years.
                                </p>
                                <p>
                                    As Chairman of Athene Guard Security, General Rajapakse brings unmatched experience, vision, and leadership, ensuring that AGS upholds the highest standards of professionalism, discipline, and trust in the security industry.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Certifications & Memberships */}
            <section className="certifications py-20">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Certifications & Memberships</h2>
                        <p>Operating in full compliance with Sri Lankan regulations and industry standards</p>
                    </motion.div>

                    <motion.p
                        className="certifications-intro"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        These certifications reflect our credibility, reliability, and dedication to delivering trusted security solutions for our clients.
                    </motion.p>

                    <div className="certifications-grid">
                        <motion.div
                            className="certification-card card"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ y: -8 }}
                        >
                            <div
                                className="certification-image clickable"
                                onClick={() => openModal('/certification-slspa.png', 'SLSPA Membership Certificate')}
                                role="button"
                                tabIndex={0}
                                onKeyPress={(e) => e.key === 'Enter' && openModal('/certification-slspa.png', 'SLSPA Membership Certificate')}
                            >
                                <img src="/certification-slspa.png" alt="SLSPA Membership Certificate" />
                                <div className="image-zoom-hint">
                                    <svg fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                                    </svg>
                                    <span>Click to enlarge</span>
                                </div>
                            </div>
                            <div className="certification-content">
                                <h3>SLSPA Member</h3>
                                <p>
                                    Proud Member of the Sri Lanka Security Providers Association (SLSPA), demonstrating our commitment to professionalism and ethical practices.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="certification-card card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ y: -8 }}
                        >
                            <div
                                className="certification-image clickable"
                                onClick={() => openModal('/business-registration.png', 'Business Registration Certificate')}
                                role="button"
                                tabIndex={0}
                                onKeyPress={(e) => e.key === 'Enter' && openModal('/business-registration.png', 'Business Registration Certificate')}
                            >
                                <img src="/business-registration.png" alt="Business Registration Certificate" />
                                <div className="image-zoom-hint">
                                    <svg fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                                    </svg>
                                    <span>Click to enlarge</span>
                                </div>
                            </div>
                            <div className="certification-content">
                                <h3>Registered Company</h3>
                                <p>
                                    Registered as a Private Limited Company under the Companies Act of Sri Lanka.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-about py-20 bg-light">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Why Choose Us</h2>
                    </motion.div>

                    <motion.div
                        className="why-choose-content-about"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="why-choose-image">
                            <img src="/security-guard.png" alt="Professional Security Guard" />
                        </div>
                        <div className="why-choose-text">
                            <p>
                                At Athene Guard Security, we go beyond providing security officers — we deliver complete, tailored security solutions that ensure lasting peace of mind.
                            </p>
                            <p>
                                Our leadership and management team bring together years of expertise from military, law enforcement, and private security backgrounds. This depth of experience enables us to assess risks accurately, design effective strategies, and provide clients with professional advice they can trust.
                            </p>
                            <p>
                                We also maintain strong partnerships with leading manufacturers in the security industry, giving us access to the latest technologies, state-of-the-art systems, and innovative methods. By integrating these solutions with our disciplined and well-trained workforce, we ensure our clients benefit from the best of both worlds — human expertise and modern technology.
                            </p>
                            <p>
                                What sets us apart is our commitment to customization. We recognize that every client's needs are unique, which is why we design security programs that are adaptable, efficient, and cost-effective. Whether you require on-site guarding, advanced surveillance, executive protection, or a fully integrated security plan, we provide solutions that deliver reliability, consistency, and excellence.
                            </p>
                            <p className="highlight-text">
                                Choosing AGS means choosing a security partner who is proactive, professional, and dedicated to protecting what matters most.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to Secure Your Future?</h2>
                        <p>Let our experienced team design a customized security solution for you</p>
                        <div className="cta-buttons">
                            <motion.a
                                href="/contact"
                                className="btn btn-primary btn-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Request a Consultation
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

            {/* Image Modal */}
            <ImageModal
                isOpen={modalImage !== null}
                onClose={closeModal}
                imageSrc={modalImage?.src}
                imageAlt={modalImage?.alt}
            />
        </div>
    );
};

export default About;

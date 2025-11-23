import { motion } from 'framer-motion';
import './CTABand.css';

const CTABand = () => {
    return (
        <section className="cta-band">
            <div className="cta-overlay"></div>
            <motion.div
                className="container cta-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="cta-text">
                    <h2>Get a free on-site security assessment — within 24 hours</h2>
                    <p>Our security experts will evaluate your property and provide a comprehensive protection plan</p>
                </div>
                <motion.a
                    href="/contact#assessment"
                    className="btn btn-primary btn-lg cta-button"
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 50px -10px rgba(255, 255, 255, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Request a Free Assessment
                </motion.a>
            </motion.div>
        </section>
    );
};

export default CTABand;

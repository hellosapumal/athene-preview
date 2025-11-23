import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "Athene's team secured our manufacturing site with professional, reliable guards — incidents dropped by 76%.",
            author: 'A. Fernando',
            role: 'Facilities Manager',
            company: 'Manufacturing',
        },
        {
            quote: "For our annual conference, Athene planned and executed flawless crowd control.",
            author: 'M. Silva',
            role: 'Events Director',
            company: 'Corporate Events',
        },
        {
            quote: "Discreet VIP protection for senior management — we felt safe and respected.",
            author: 'L. Gomes',
            role: 'CEO',
            company: 'Retail Chain',
        },
        {
            quote: "Their patrol reporting system gives us real-time peace of mind.",
            author: 'R. Perera',
            role: 'Property Manager',
            company: 'Residential Complex',
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials-section py-20">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>What Our Clients Say</h2>
                    <p>Trusted by businesses and organizations across the region</p>
                </motion.div>

                <div className="testimonial-slider">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="testimonial-card"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="testimonial-quote">"{testimonials[currentIndex].quote}"</p>
                            <div className="testimonial-author">
                                <div className="testimonial-info">
                                    <h4>{testimonials[currentIndex].author}</h4>
                                    <p>{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="testimonial-controls">
                        <motion.button
                            className="testimonial-nav-btn"
                            onClick={prevTestimonial}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </motion.button>

                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>

                        <motion.button
                            className="testimonial-nav-btn"
                            onClick={nextTestimonial}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

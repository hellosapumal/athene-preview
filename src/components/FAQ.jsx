import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'What qualifications do your guards have?',
            answer: 'All guards are licensed, background-checked and trained in first aid, crowd control and incident reporting. We maintain continuous training programs to ensure our team stays current with best practices.',
        },
        {
            question: 'How quickly can you start coverage?',
            answer: 'We can start emergency short-term coverage within 24–72 hours. Full deployments are scheduled after a comprehensive site assessment to ensure optimal security planning.',
        },
        {
            question: 'How is pricing calculated?',
            answer: 'Pricing is based on site risk assessment, hours required, number of officers needed, and technology integration. We provide transparent quotes with no hidden fees.',
        },
        {
            question: 'Do you provide uniformed and plain-clothes officers?',
            answer: 'Yes — we offer both visible deterrence with uniformed officers and discreet protection with plain-clothes personnel, depending on your security needs.',
        },
        {
            question: 'How are incidents reported?',
            answer: 'Real-time digital incident reports with photos and GPS location are provided immediately. We also deliver weekly and monthly analytics to track patterns and improvements.',
        },
        {
            question: 'Are your officers insured?',
            answer: 'Yes — we carry full liability and worker coverage. All our operations are fully insured to protect both our clients and our personnel.',
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section py-20 bg-light">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Frequently Asked Questions</h2>
                    <p>Quick answers to common security questions</p>
                </motion.div>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="accordion-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <button
                                className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span>{faq.question}</span>
                                <motion.svg
                                    className="accordion-icon"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </motion.svg>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="accordion-content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="accordion-body">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="faq-cta"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p>Still have questions? <a href="/contact" className="text-athene-orange font-semibold hover:underline">Contact Us</a></p>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;

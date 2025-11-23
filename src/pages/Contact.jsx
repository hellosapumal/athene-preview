import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        company: '',
        service: '',
        message: '',
        honeypot: '' // Spam protection
    });

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Spam check
        if (formData.honeypot) {
            console.log('Bot detected');
            return;
        }

        setFormStatus({ submitting: true, submitted: false, error: null });

        try {
            // EmailJS configuration
            // IMPORTANT: Replace these values with your actual EmailJS credentials
            const serviceId = 'YOUR_SERVICE_ID';  // Replace with your EmailJS service ID
            const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
            const publicKey = 'YOUR_PUBLIC_KEY';   // Replace with your EmailJS public key

            const templateParams = {
                from_name: formData.name,
                from_mobile: formData.mobile,
                from_email: formData.email,
                company: formData.company,
                service: formData.service,
                message: formData.message,
                to_email: 'manchalaperera@gmail.com' // Change this to your desired email
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setFormStatus({ submitting: false, submitted: true, error: null });
            setFormData({
                name: '',
                mobile: '',
                email: '',
                company: '',
                service: '',
                message: '',
                honeypot: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormStatus({ submitting: false, submitted: false, error: null });
            }, 5000);
        } catch (err) {
            console.error('EmailJS Error:', err);
            setFormStatus({
                submitting: false,
                submitted: false,
                error: 'Failed to send message. Please try again or contact us directly.'
            });
        }
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="industries-hero">
                <div className="industries-hero-overlay"></div>
                <motion.div
                    className="container industries-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Contact Us</h1>
                    <p>We are here to help. Reach out to us for any inquiries.</p>
                </motion.div>
            </section>

            {/* Split Layout: Info & Form */}
            <section className="contact-split-section">
                {/* Left Column: Contact Info */}
                <div className="contact-info-column">
                    <motion.div
                        className="contact-info-wrapper"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Contact Information</h2>

                        <div className="contact-info-list">
                            <div className="info-item">
                                <div className="info-icon">
                                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div className="info-content">
                                    <h3>Address</h3>
                                    <p>36/2, 1/1, Park Lane,<br />Nawala, Rajagiriya</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div className="info-content">
                                    <h3>Phone</h3>
                                    <p>
                                        <a href="tel:0772931199">077 293 11 99</a><br />
                                        <a href="tel:0112123456">0112 123 456</a>
                                    </p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div className="info-content">
                                    <h3>Email</h3>
                                    <p>
                                        <a href="mailto:srinath@athene.lk">srinath@athene.lk</a><br />
                                        <a href="mailto:atheneguardoffice@gmail.com">atheneguardoffice@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                                </div>
                                <div className="info-content">
                                    <h3>Website</h3>
                                    <p><a href="https://athene.lk">athene.lk</a></p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Form */}
                <div className="contact-form-column">
                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Get in Touch</h2>

                        {formStatus.submitted ? (
                            <div className="success-message">
                                <h3>Message Sent!</h3>
                                <p>Thank you for contacting us. We will get back to you shortly.</p>
                                <button onClick={() => setFormStatus({ ...formStatus, submitted: false })}>
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                {/* Honeypot */}
                                <div style={{ display: 'none' }}>
                                    <input
                                        type="text"
                                        name="honeypot"
                                        value={formData.honeypot}
                                        onChange={handleChange}
                                        tabIndex="-1"
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mobile">Mobile Number *</label>
                                        <input
                                            type="tel"
                                            id="mobile"
                                            name="mobile"
                                            required
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            placeholder="077 123 4567"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company">Company Name</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your Company (Optional)"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service">Service Preference *</label>
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="Static Guarding & On-Site Security">Static Guarding & On-Site Security</option>
                                        <option value="Executive & Personal Protection">Executive & Personal Protection</option>
                                        <option value="Bodyguard & VIP Protection">Bodyguard & VIP Protection</option>
                                        <option value="Risk Mitigation">Risk Mitigation</option>
                                        <option value="Electronic Countermeasures">Electronic Countermeasures</option>
                                        <option value="Concierge & Reception Security">Concierge & Reception Security</option>
                                        <option value="Security Consultancy">Security Consultancy</option>
                                        <option value="Private Investigation Service">Private Investigation Service</option>
                                        <option value="Technical & Electronic Security">Technical & Electronic Security</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your security needs..."
                                    ></textarea>
                                </div>

                                {formStatus.error && (
                                    <div className="error-message">
                                        {formStatus.error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={formStatus.submitting}
                                    className="btn-submit"
                                >
                                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Bottom Map Section */}
            <section className="contact-map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.2159317490548!2d79.89639566954989!3d6.906894130940829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f32b88707f%3A0x6d679cc17bac56d7!2s47%20Park%20Ln%2C%20Sri%20Jayawardenepura%20Kotte!5e0!3m2!1sen!2slk!4v1763925790475!5m2!1sen!2slk"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Athene Guard Security Location"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;

import { motion } from 'framer-motion';
import './LatestArticles.css';

const LatestArticles = () => {
    const articles = [
        {
            title: 'How to Choose the Right Security Partner for Your Office',
            excerpt: 'Key factors to consider when selecting a security company for your corporate environment...',
            image: '/control-room.png',
            date: 'Nov 15, 2024',
            readTime: '5 min read',
        },
        {
            title: '5 Ways CCTV Analytics Reduce Risk',
            excerpt: 'Modern surveillance technology goes beyond recording — discover how AI-powered analytics...',
            image: '/patrol-vehicle.png',
            date: 'Nov 10, 2024',
            readTime: '4 min read',
        },
        {
            title: 'Event Security: A Checklist for Organizers',
            excerpt: 'Planning a successful event requires comprehensive security planning. Here\'s what you need...',
            image: '/hero-bg.png',
            date: 'Nov 5, 2024',
            readTime: '6 min read',
        },
    ];

    return (
        <section className="latest-articles py-20 bg-light">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Latest Security Insights</h2>
                    <p>Expert advice and industry updates</p>
                </motion.div>

                <div className="articles-grid">
                    {articles.map((article, index) => (
                        <motion.article
                            key={index}
                            className="article-card card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="article-image">
                                <img src={article.image} alt={article.title} />
                                <div className="article-meta-overlay">
                                    <span className="article-date">{article.date}</span>
                                    <span className="article-read-time">{article.readTime}</span>
                                </div>
                            </div>
                            <div className="article-content">
                                <h3 className="article-title">{article.title}</h3>
                                <p className="article-excerpt">{article.excerpt}</p>
                                <motion.a
                                    href="/blog"
                                    className="article-link"
                                    whileHover={{ x: 5 }}
                                >
                                    Read More
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </motion.a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    className="articles-cta"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.a
                        href="/blog"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Articles
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default LatestArticles;

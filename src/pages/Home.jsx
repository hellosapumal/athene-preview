import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';
import KeyHighlights from '../components/KeyHighlights';
import ClientsSlider from '../components/ClientsSlider';
import WhyChoose from '../components/WhyChoose';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import CTABand from '../components/CTABand';

function Home() {
    return (
        <main>
            <Hero />
            <KeyHighlights />
            <WhyChoose />
            <ClientsSlider />
            <Testimonials />
            <FAQ />
            <CTABand />
        </main>
    );
}

export default Home;

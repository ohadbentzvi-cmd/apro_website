import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Vision from '../components/Vision';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import InteractiveTestimonial from '../components/InteractiveTestimonial';

interface HomeProps {
    onStartAssessment: () => void;
}

const Home: React.FC<HomeProps> = ({ onStartAssessment }) => {
    return (
        <>
            <Header onStart={onStartAssessment} />
            <main>
                <Hero onStart={onStartAssessment} />
                <Benefits />
                <InteractiveTestimonial />
                {/* <Vision /> */}
                <CTA onStart={onStartAssessment} />
            </main>
            <Footer />
        </>
    );
};

export default Home;

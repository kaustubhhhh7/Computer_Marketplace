import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import FAQ from './FAQs';
import Footer from './Dashboard comps/Footer';
import Services from './Services';
import About from './About';
import TeamsPatrons from './TeamsPatrons';
import './styles/Home.css';

// Import background images
import JP1 from '../assets/JP1.png';
import JP2 from '../assets/JP2.png';
import JP3 from '../assets/JP3.png';

function Home() {
    const navigate = useNavigate();

    const HardwareFaqData = [
        {
            question: "What is the difference between Intel and AMD processors?",
            answer: "Intel processors offer strong single-core performance, making them great for gaming. AMD Ryzen processors excel in multi-core performance, ideal for multitasking and productivity."
        },
        {
            question: "What does VRAM do in a graphics card?",
            answer: "VRAM (Video RAM) stores graphics-related data. Higher VRAM allows for better rendering of high-resolution textures and improves gaming and 3D application performance."
        },
        {
            question: "Which power supply unit (PSU) is best for gaming PCs?",
            answer: "A PSU with at least 80 Plus Bronze certification and sufficient wattage (600W or more for gaming rigs) is recommended. Modular PSUs help with better cable management."
        }
    ];

    return (
        <div className="home-container fade-in">
            <Header />

            {/* Hero Section with Background Slideshow */}
            <section className="hero-section">
                {/* Background Image Slideshow */}
                <div className="hero-bg-slideshow">
                    <div className="hero-bg-image" style={{ backgroundImage: `url(${JP1})` }}></div>
                    <div className="hero-bg-image" style={{ backgroundImage: `url(${JP2})` }}></div>
                    <div className="hero-bg-image" style={{ backgroundImage: `url(${JP3})` }}></div>
                </div>

                {/* Dark overlay for text readability */}
                <div className="hero-overlay"></div>

                <div className="hero-bg-mesh"></div>
                <div className="hero-content slide-up">
                    <span className="hero-badge">Next Gen Hardware</span>
                    <h1 className="hero-title">The Future of <br />Computing</h1>
                    <p className="hero-subtitle">
                        Experience the pinnacle of performance with our premium selection of
                        processors, graphics cards, and custom builds. Designed for those who demand the best.
                    </p>
                    <div className="hero-cta-group">
                        <button className="btn-primary" onClick={() => navigate('/dashboard')}>
                            Explore Products
                        </button>
                        <button className="btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="mouse-icon"></div>
                    <span>Scroll</span>
                </div>
            </section>

            {/* About Section */}
            <div id="about" className="section-wrapper">
                <About />
            </div>

            {/* Services Section */}
            <div className="section-wrapper bg-secondary">
                <Services />
            </div>

            {/* Showcase Section */}
            <div className="section-wrapper">
                <TeamsPatrons />
            </div>

            {/* FAQ Section */}
            <div className="section-wrapper" id='faq'>
                <div className="max-w-container">
                    <FAQ faqdata={HardwareFaqData} who={"Common Questions"} />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;

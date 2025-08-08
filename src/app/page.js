'use client';

import { useRef, useState, useEffect } from 'react';
import SplitText from '../../components/ui/SplitText';
import Image from 'next/image'

// Event content components
import About from '../../components/About';
import FEP from '../../components/FEP';
import Blogs from '../../components/Blogs';
import Contact from '../../components/Contact';
import Events from '../../components/Events';
import Gallery from '../../components/Gallery';
import Resources from '../../components/Resources';


function useScrollAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible]; 
}

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Animation refs for each section
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [fepRef, fepVisible] = useScrollAnimation();
  const [blogsRef, blogsVisible] = useScrollAnimation();
  const [eventsRef, eventsVisible] = useScrollAnimation();
  const [resourcesRef, resourcesVisible] = useScrollAnimation();
  const [galleryRef, galleryVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();

  return (
    <>
      {/* Sidebar Toggle */}
      <button className="menu-toggle" onClick={toggleSidebar}>☰ Menu</button>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <a href="#about" onClick={toggleSidebar}>About</a>
        <a href="#fep" onClick={toggleSidebar}>FEP</a>
        <a href="#blogs" onClick={toggleSidebar}>Blogs</a>
        <a href="#Events" onClick={toggleSidebar}>Events</a>
        <a href="#resources" onClick={toggleSidebar}>Resources</a>
        <a href="#gallery" onClick={toggleSidebar}>Gallery</a>
        <a href="#contact" onClick={toggleSidebar}>Contact</a>
      </div>

      {/* Page Wrapper */}
      <div className={`main-wrapper ${sidebarOpen ? 'with-sidebar' : ''}`}>

        {/* Hero Section */}
        <div className="main-container">
          <div className="overlay">
            <div className="center-text">
              <div className="line">
                <SplitText
                  text="Greetings from the"
                  className="animated-text"
                  delay={100}
                  duration={0.1}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>
              <div className="line">
                <SplitText
                  text="International Relations Wing, IIT Kanpur"
                  className="animated-text"
                  delay={50}
                  duration={0.1}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Logos after Hero */}
        <div className="logo-wrapper">
          <div className="hero-logos">
            <Image src="/logo1.jpg" alt="Logo 1" width={150} height={150} />
            <Image src="/logo2.jpg" alt="Logo 2" width={150} height={150} />
          </div>
        </div>

        {/* Scroll-enabled Sections */}
        <div
          id="about"
          ref={aboutRef}
          className={`content-section scroll-animate ${aboutVisible ? 'visible' : ''}`}
        >
          <About />
        </div>

        <div
          id="FEP"
          ref={fepRef}
          className={`content-section scroll-animate ${fepVisible ? 'visible' : ''}`}
        >
          <FEP />
        </div>

        <div
          id="blogs"
          ref={blogsRef}
          className={`content-section scroll-animate ${blogsVisible ? 'visible' : ''}`}
        >
          <Blogs />
        </div>

        <div
          id="Events"
          ref={eventsRef}
          className={`content-section scroll-animate ${eventsVisible ? 'visible' : ''}`}
        >
          <Events />
        </div>

        <div
          id="resources"
          ref={resourcesRef}
          className={`content-section scroll-animate ${resourcesVisible ? 'visible' : ''}`}
        >
          <Resources />
        </div>

        <div
          id="gallery"
          ref={galleryRef}
          className={`content-section scroll-animate ${galleryVisible ? 'visible' : ''}`}
        >
          <Gallery />
        </div>

        <div
          id="contact"
          ref={contactRef}
          className={`content-section scroll-animate ${contactVisible ? 'visible' : ''}`}
        >
          <Contact />
        </div>
      </div>
    </>
  );
}

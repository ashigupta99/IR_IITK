'use client';

import { useRef, useState, useEffect } from 'react';
import SplitText from '../../components/ui/SplitText';
import Image from 'next/image';

// Component Imports
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import About from '../../components/About';
import FEP from '../../components/FEP';
import Blogs from '../../components/Blogs';
import Contact from '../../components/Contact';
import Events from '../../components/Events';
import Gallery from '../../components/Gallery';
import Resources from '../../components/Resources';

// Custom hook for scroll animations (no changes needed here)
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

// Main Home Page Component
export default function Home() {
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
      <Header onMenuToggle={toggleSidebar} />

      {/* ✅ Naye 'Sidebar' component ka istemal kiya gaya hai */}
      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />

      {/* ❌ Purana direct sidebar ka code (div) yahan se poori tarah hata diya gaya hai */}

      {/* ✅ 'with-sidebar' class ki ab zaroorat nahi hai, kyunki menu ab overlay hai */}
      <div className="main-wrapper">

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

        {/* All Content Sections */}
        <div id="about" ref={aboutRef} className={`content-section scroll-animate ${aboutVisible ? 'visible' : ''}`}>
          <About />
        </div>
        <div id="fep" ref={fepRef} className={`content-section scroll-animate ${fepVisible ? 'visible' : ''}`}>
          <FEP />
        </div>
        <div id="blogs" ref={blogsRef} className={`content-section scroll-animate ${blogsVisible ? 'visible' : ''}`}>
          <Blogs />
        </div>
        <div id="Events" ref={eventsRef} className={`content-section scroll-animate ${eventsVisible ? 'visible' : ''}`}>
          <Events />
        </div>
        <div id="resources" ref={resourcesRef} className={`content-section scroll-animate ${resourcesVisible ? 'visible' : ''}`}>
          <Resources />
        </div>
        <div id="gallery" ref={galleryRef} className={`content-section scroll-animate ${galleryVisible ? 'visible' : ''}`}>
          <Gallery />
        </div>
        <div id="contact" ref={contactRef} className={`content-section scroll-animate ${contactVisible ? 'visible' : ''}`}>
          <Contact />
        </div>
      </div>
    </>
  );
}
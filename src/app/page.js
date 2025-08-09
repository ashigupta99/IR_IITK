'use client';

import { useRef, useState, useEffect } from 'react';

// Component Imports
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
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

  const [fepRef, fepVisible] = useScrollAnimation();
  const [blogsRef, blogsVisible] = useScrollAnimation();
  const [eventsRef, eventsVisible] = useScrollAnimation();
  const [resourcesRef, resourcesVisible] = useScrollAnimation();
  const [galleryRef, galleryVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();

  return (
    <>
      <Header onMenuToggle={toggleSidebar} />

      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
      <div className="main-wrapper">

        {/* Hero Section */}
        <div className="main-container">
          <div className="overlay">
            <div className="text-card">
              <p>
                The International Relations Wing of the Academics and Career Council at IIT Kanpur is a dedicated team of bright and ambitious students committed to fostering and nurturing relationships between IITK and its international counterparts. Working closely with the Office of International Relations (OIR), our mission is to encourage talented young minds to explore their areas of interest, enhance their skills, and develop a global perspective through semester exchange programs and research internships with top-notch international institutes.
              </p>
              <p>
                Our team works tirelessly to maintain a spirit of collaboration, excitement, and a broad perspective in the interest of campus community. We are dedicated to enriching the IITK community and promoting global academic exchange.
              </p>
            </div>
          </div>
        </div>

        {/* All Content Sections */}
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
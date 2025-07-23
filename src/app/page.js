'use client';

import { useState } from 'react';
import SplitText from '../../components/ui/SplitText';

// Import event content components
import About from '../../components/About';
import Blogs from '../../components/Blogs';
import Contact from '../../components/Contact';
import Events from '../../components/Events';
import Gallery from '../../components/Gallery';
import Resources from '../../components/Resources';

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Sidebar Toggle */}
      <button className="menu-toggle" onClick={toggleSidebar}>☰ Menu</button>

      {/* Sidebar Index */}
      <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
        <a href="#about" onClick={toggleSidebar}>About</a>
        <a href="#blogs" onClick={toggleSidebar}>Blogs</a>
        <a href="#contact" onClick={toggleSidebar}>Contact</a>
        <a href="#events" onClick={toggleSidebar}>Events</a>
        <a href="#gallery" onClick={toggleSidebar}>Gallery</a>
        <a href="#resources" onClick={toggleSidebar}>Resources</a>
      </div>

      {/* Hero Section */}
      <div className="main-container">
        <div className="overlay">
          <div className="center-text">
            <div className="line">
              <SplitText text="Greetings from" className="animated-text" delay={100} duration={0.1} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} />
            </div>
            <div className="line">
              <SplitText text="International Relations Wing" className="animated-text" delay={50} duration={0.1} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} />
            </div>
            <div className="line">
              <SplitText text="IIT Kanpur" className="animated-text" delay={100} duration={0.1} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} />
            </div>
          </div>
        </div>
      </div>

      {/* Event Sections with content loaded from separate files */}
      <div id="about" className="content-section">
        <About />
      </div>

      <div id="blogs" className="content-section">
        <Blogs />
      </div>

      <div id="contact" className="content-section">
        <Contact />
      </div>

      <div id="events" className="content-section">
        <Events />
      </div>

      <div id="gallery" className="content-section">
        <Gallery />
      </div>

      <div id="resources" className="content-section">
        <Resources />
      </div>

    </>
  );
}

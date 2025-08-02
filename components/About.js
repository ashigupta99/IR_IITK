import React, { useEffect, useRef, useState } from 'react';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.5,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`about-wrapper ${visible ? 'visible' : ''}`}
    >
      <h1 className="about-heading">ABOUT US</h1>
      <p className="about-description">
        The International Relations Wing of the Academics and Career Council at IIT Kanpur is a dedicated team of bright and ambitious students committed to fostering and nurturing relationships between IITK and its international counterparts. Working closely with the Office of International Relations (OIR), our mission is to encourage talented young minds to explore their areas of interest, enhance their skills, and develop a global perspective through semester exchange programs and research internships with top-notch international institutes.
        Our team works tirelessly to maintain a spirit of collaboration, excitement, and a broad perspective in the interest of campus community. We are dedicated to enriching the IITK community and promoting global academic exchange.
      </p>
    </div>
  );
}

'use client';
import Image from 'next/image';
import './contact.css';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Divi Pothukuchi',
    title: 'Coordinator',
    phone: '+91 9884097619',
    image: '/divi.jpg',
    linkedin: 'https://www.linkedin.com/in/divi-pothukuchi-645867281/',
  },
  {
    name: 'Vaibhav Kumar',
    title: 'Coordinator',
    phone: '+91 6307807237',
    image: '/vaibhav.jpg',
    linkedin: 'https://www.linkedin.com/in/vaibhav-kumar-43b3b5298',
  },
  {
    name: 'Aaryan Chandral',
    title: 'Coordinator',
    phone: '+91 9315210739',
    image: '/aaryan.jpg', 
    linkedin: 'https://www.linkedin.com/in/aaryan-chandra-080347166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
];

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Meet Our Team</h2>
      <p>Coordinators</p>

      <div className="contact-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="contact-card">
            <Image
              src={member.image}
              alt={member.name}
              width={120}
              height={120}
              className="profile-img"
            />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
            <p>{member.phone}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

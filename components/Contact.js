// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact</h1>
//       <p>Contact us at ir@iitk.ac.in.</p>
//     </div>
//   );
// }

'use client';
import Image from 'next/image';
import './contact.css';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Divi',
    title: 'Coordinator, IR Wing',
    phone: '+91 xxxxxxxxxx',
    image: '/nirjala.jpg',
    linkedin: '#',
  },
  {
    name: 'Abc',
    title: 'Coordinator, IR Wing ',
    phone: '+91 xxxxxxxxxx',
    image: '/susruth.jpg',
    linkedin: '#',
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

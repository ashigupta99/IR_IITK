import React from 'react';

/**
 * Yeh component ab ek Full-Screen Top-Down Menu ki tarah kaam karta hai.
 * @param {object} props - Component ke props
 * @param {boolean} props.isOpen - Yeh batata hai ki menu khula hai ya nahi.
 * @param {Function} props.onClose - Yeh function menu ko band karne ke liye call hota hai.
 */
const Sidebar = ({ isOpen, onClose }) => {
  return (
    // 'isOpen' prop ke aadhar par 'active' class lagti ya hat'ti hai.
    <div className={`top-menu ${isOpen ? 'active' : ''}`}>
      
      {/* Menu ko band karne ke liye 'X' button */}
      <button className="close-btn" onClick={onClose}>
        &times; {/* Yeh 'X' ka symbol hai */}
      </button>

      {/* Navigation links ka container */}
      <div className="menu-links">
        {/* Har link par click karne se bhi menu band ho jayega (onClose call hone ki wajah se) */}
        <a href="#about" onClick={onClose}>About</a>
        <a href="#fep" onClick={onClose}>FEP</a>
        <a href="#blogs" onClick={onClose}>Blogs</a>
        <a href="#Events" onClick={onClose}>Events</a>
        <a href="#resources" onClick={onClose}>Resources</a>
        <a href="#gallery" onClick={onClose}>Gallery</a>
        <a href="#contact" onClick={onClose}>Contact</a>
      </div>

    </div>
  );
};

export default Sidebar;
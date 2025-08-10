import Link from 'next/link';
import Image from 'next/image';

const Header = ({ onMenuToggle }) => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-container">
          <Link href="/" className="logo-link">
            <Image src="/logo2.jpg" alt="IR Wing Logo" width={45} height={45} />
            <span className="logo-text">International Relations Wing</span>
          </Link>
        </div>
        <nav className="desktop-nav">
          {/* Internal page section links */}
          <a href="#fep">FEP</a>
          <a href="#blogs">Blogs</a>
          <a href="#Events">Events</a>
          <a href="#resources">Resources</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="menu-toggle" onClick={onMenuToggle}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;

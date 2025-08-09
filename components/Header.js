import Image from 'next/image';

const Header = ({ onMenuToggle }) => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-container">
          <a href="/">
            <Image src="/logo2.jpg" alt="IR Wing Logo" width={45} height={45} />
            <span className="logo-text">International Relations Wing</span>
          </a>
        </div>
        <nav className="desktop-nav">
          <a href="#about">About</a>
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
import React, { useState } from "react";
import "./Header.css";
import logoBallke from "../../assets/logo-ballke.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/contato";
  const headerClasses = isContactPage
    ? "site-header dark-background"
    : "site-header";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={headerClasses}>
      <div className="header-container">
        <div className="header-left">
          <Link to="/" onClick={closeMenu}>
            <img src={logoBallke} alt="Logo do Grupo Ballke" className="logo" />
          </Link>
        </div>

        <div className={`header-center ${menuOpen ? "menu-open" : ""}`}>
          <nav>
            <ul>
              <li>
                <Link to="/marcas" onClick={closeMenu}>Marcas</Link>
              </li>
              <li>
                <Link to="/quem-somos" onClick={closeMenu}>Sobre nós</Link>
              </li>
              <li>
                <Link to="/carreiras" onClick={closeMenu}>Carreiras</Link>
              </li>
              <li>
                <Link to="/politicas" onClick={closeMenu}>LGPD</Link>
              </li>
              <li className="mobile-contato">
                <Link to="/contato" onClick={closeMenu}>Contato</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <Link to="/contato" className="contact-button" onClick={closeMenu}>
            Contato
          </Link>
          <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

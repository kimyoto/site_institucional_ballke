import React from "react";
import "./Header.css";
import logoBallke from "../../assets/logo-ballke.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contato";
  const headerClasses = isContactPage
    ? "site-header dark-background"
    : "site-header";
  return (
    <header className={headerClasses}>
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
            <img src={logoBallke} alt="Logo do Grupo Ballke" className="logo" />
          </Link>
        </div>

        <div className="header-center">
          <nav>
            <ul>
              <li>
                <Link to="/marcas">Marcas</Link>
              </li>
              <li>
                <Link to="/quem-somos">Sobre nós</Link>
              </li>
              <li>
                <Link to="/carreiras">Carreiras</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <Link to="/contato" className="contact-button">
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

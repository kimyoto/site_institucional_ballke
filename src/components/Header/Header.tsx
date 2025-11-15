import React from 'react';
import './Header.css';
import logoBallke from '../../assets/logo-ballke.png';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
      
        <div className="header-left">
          <Link to="/">
            <img src={logoBallke} alt="Logo do Grupo Ballke" className="logo" />
          </Link>
        </div>

        <div className="header-center">
          <nav>
            <ul>
              
              <li><Link to="/marcas">Marcas</Link></li> 
              <li><Link to="/quem-somos">Sobre nós</Link></li>
              <li><Link to="/carreiras">Carreiras</Link></li>
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
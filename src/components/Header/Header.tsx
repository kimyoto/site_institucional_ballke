import React from 'react';
import './Header.css';
import logoBallke from '../../assets/logo-ballke.png';
import { Link } from 'react-router-dom'; // 1. IMPORTE O 'Link' AQUI

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
      
        <div className="header-left">
          <img src={logoBallke} alt="Logo do Grupo Ballke" className="logo" />
        </div>

        <div className="header-center">
          <nav>
            <ul>
              
              <li><Link to="/">Home</Link></li> 
              
              <li><Link to="/servicos">Serviços</Link></li>
              
              <li><Link to="/quem-somos">Sobre nós</Link></li>
              
              <li><Link to="/carreiras">Carreiras</Link></li>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <button className="contact-button">Contato</button>
        </div>

      </div>
    </header>
  );
}

export default Header;
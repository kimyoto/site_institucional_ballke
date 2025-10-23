import React from 'react';
import './Header.css';


import logoBallke from '../../assets/logo-ballke.png'; 

function Header() {
  return (
    
  <header className="site-header">
    
    {}
    <div className="header-container">
      
      {}
      <div className="header-left">
        <img src={logoBallke} alt="Logo do Grupo Ballke" className="logo" />
      </div>

      <div className="header-center">
        <nav>
          <ul>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/sobre-nos">Sobre nós</a></li>
            <li><a href="/carreiras">Carreiras</a></li>
          </ul>
        </nav>
      </div>

      <div className="header-right">
        <button className="contact-button">Contato</button>
      </div>

    </div> {}
  </header>
  );
}

export default Header;
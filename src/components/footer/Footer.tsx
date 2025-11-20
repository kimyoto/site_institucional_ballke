import React from "react";
import "./Footer.css";

export default function Footer() {
  return <footer className="footer-container">
    <div className="footer-bar-gray">
      <div className="footer-social-group">
        <a
          href="https://www.facebook.com/grupoballke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/lg_facebook.png")}
            alt="Facebook"
            className="footer-social-icon"
          />
        </a>
        <a
          href="https://www.instagram.com/grupoballke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/lg_instagram.png")}
            alt="Instagram"
            className="footer-social-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/grupo-ballke/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/lg_linkedin.png")}
            alt="LinkedIn"
            className="footer-social-icon"
          />
        </a>
      </div>
      <a href="/contato" className="footer-link link-contato">
        Contato
      </a>

      <a href="/marcas" className="footer-link link-servicos">
        Marcas
      </a>

      <a href="/carreiras" className="footer-link link-carreira">
        Carreira
      </a>
    </div>

    <div className="footer-bar-white">
      <img
        src={require("../../assets/logo_ballke_escuro.png")}
        alt="Logo Grupo Ballke"
        className="footer-logo"
      />
    </div>
  </footer>;
}

import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="sections-container">
      <section className="hero-section">
        <h2 className="text-top">
          Seja bem-vindo ao
          <br />
          Grupo Ballke!
        </h2>
      </section>

      <section className="section-bg-two">
        <div className="sub-section-container">
          <h2 className="text-bg2">
            Confira nossas marcas e descubra qual é a ideal para você.
          </h2>
        </div>

        <div className="sub-section-container">
          <div className="magazine-medica-buttons">
            <img
              src={require("../assets/magazine_branco.png")}
              alt="Logo Magazine Médica"
              className="hero-image-logo logo-2"
            />
            <a
              href="https://www.magazinemedica.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button"
            >
              Visitar site
            </a>
          </div>
          <div className="nestsafe-buttons">
            <img
              src={require("../assets/nestsafe_banco.png")}
              alt="Logo Nestsafe"
              className="hero-image-logo logo-1"
            />
            <a href="#link-marca-2" className="hero-button">
              Visitar site
            </a>
            
          </div>
        </div>
      </section>
      
      <section className="section-bg-three">
        <h2 className="bg-three-text">Nossa trajetória até aqui</h2>

        <a href="conheca" className="conheca-button button-3">
          Conheça
        </a>
      </section>

      <section className="section-bg-four">
        <h2 className="bg-four-text">Nossas cultura</h2>
        <Link to="/nossa-cultura" className="saiba-mais-button button-4">
          Saiba Mais
        </Link>
      </section>

      <section className="section-bg-five">
        <h2 className="bg-five-text">Trabalhe Conosco</h2>
        <a href="#vagas" className="vagas-button button-5">
          Vagas Disponíveis
        </a>
      </section>
    </main>
  );
}

export default HomePage;

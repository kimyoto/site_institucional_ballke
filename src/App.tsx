import React from 'react';
import './App.css';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />

      <main>
        
     
        <section className="hero-section">
          
          
          <h2 className="text-bg2">
            Confira nossas marcas e descubra qual é a ideal para você.
          </h2>
          <a 
                href="https://www.magazinemedica.com.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-button button-1"
              >
                Visitar site
            </a>

          <a href="#link-marca-2" className="hero-button button-2">
            Visitar site
          </a>

            <img 
            src={require('./assets/nestsafe_banco.png')} 
            alt="Logo Nestsafe" 
            className="hero-image-logo logo-1" />

          {}
          <img 
          src={require('./assets/magazine_branco.png')} 
          alt="Logo Magazine Médica" 
          className="hero-image-logo logo-2" 
          />
        </section>

       
        <section className="section-bg-two">
        </section>
        <section className="section-bg-three">
           <h2 className="bg-three-text">
            Nossa trajetória até aqui
            </h2>

            <a href="#link-conheca" className="conheca-button button-3">
             Conheça
            </a>
        
            </section>

            <section className="section-bg-four">
              <h2 className="bg-four-text">
              Nossas áreas de atuação
              </h2>
              <a href="#saiba-mais" className="saiba-mais-button button-4">
              Saiba Mais
              </a>
            </section>

        <section className="section-bg-five">
          <h2 className="bg-five-text">
            Trabalhe Conosco
          </h2>
          <a href="#vagas" className="vagas-button button-5">
            Vagas Disponíveis
          </a>
        </section>

      </main>

        <footer className="footer-container">
        
<div className="footer-bar-gray">
            <div className="footer-social-group">
              <a href="https://www.facebook.com/grupoballke/" target="_blank" rel="noopener noreferrer">
                <img src={require('./assets/lg_facebook.png')} alt="Facebook" className="footer-social-icon" />
              </a>
              <a href="https://www.instagram.com/grupoballke/" target="_blank" rel="noopener noreferrer">
                <img src={require('./assets/lg_instagram.png')} alt="Instagram" className="footer-social-icon" />
              </a>
              <a href="https://www.linkedin.com/company/grupo-ballke/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <img src={require('./assets/lg_linkedin.png')} alt="LinkedIn" className="footer-social-icon" />
              </a>
            </div>
              <a href="#contato" className="footer-link link-contato">Contato</a>
  
              <a href="/servicos" className="footer-link link-servicos">Serviços</a>
  
              <a href="/carreiras" className="footer-link link-carreira">Carreira</a>

            </div>

          <div className="footer-bar-white">
            <img 
              src={require('./assets/logo_ballke_escuro.png')} 
              alt="Logo Grupo Ballke"
              className="footer-logo"
            />
          </div>

        </footer>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />

      <main>
        
        {/* Seção 1 (background1) */}
        <section className="hero-section">
          
          {/* COLOQUE O TEXTO AQUI DENTRO */}
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
            className="hero-image-logo logo-1" 
 />

          {}
          <img 
          src={require('./assets/magazine_branco.png')} 
          alt="Logo Magazine Médica" 
          className="hero-image-logo logo-2" 
          />
        </section>

        {/* Seção 2 (background2) */}
        <section className="section-bg-two">
          {/* A outra frase (que você ia adicionar) virá aqui depois */}
        </section>
        <section className="section-bg-three">
           {/* Conteúdo da Seção 3 virá aqui */}
           <h2 className="bg-three-text">
            Nossa trajetória até aqui
          </h2>

          <a href="#link-conheca" className="conheca-button button-3">
             Conheça
          </a>


            </section>
      </main>
    </div>
  );
}

export default App;
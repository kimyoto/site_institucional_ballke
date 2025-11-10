import React from 'react';
import './QuemSomosPage.css';
import { Link } from 'react-router-dom';

function QuemSomosPage() {
  return (
    <> 
      <section className="quemsomos-hero-background">
        <h2 className='text-topo-quemsomos'>
          Quem Somos
        </h2>
      </section>

      <section className="text-images-quemsomos">
        <h2 className='quemsomos-grupoballke'>Grupo Ballke</h2>
        <h2 className='quemsomos-text-1'>Nosso propósito é impulsionar a melhoria contínua dos serviços de saúde e estimular a inovação no mercado. Atuamos fornecendo produtos e soluções que apoiam profissionais e instituições na conquista de resultados cada vez mais eficientes e relevantes no cenário nacional.</h2>
        <h2 className='quemsomos-text-2'>Além disso, trabalhamos em conformidade com as regulamentações nacionais e internacionais, garantindo que todos os nossos produtos estejam em total conformidade com os mais altos padrões de qualidade.</h2>
        <h2 className='quemsomos-text-3'>No Grupo Ballke, cada produto reflete nosso compromisso com a inovações, a precisão e o cuidado com a saúde. Convidamos você a explorar nossas soluções e ver como podemos agregar valor aos seus processos, contribuindo para resultados mais eficientes, sustentáveis e inovadores.</h2>
      </section>

      <section className='quemsomos-images'>
      </section>
      <div className='gray-bar-atuacao'>
        <h2 className='text-images-1'>
          NOSSAS ÁREAS DE ATUAÇÃO
        </h2>
      </div>

      <section className="quemsomos-two-column-section">
        <div className="column-left-block">
          <img src={require('../assets/quemsomos2.png')} alt="Nossa Unidade" />
          <div className="image-gray-bar">
            <h3>NOSSA UNIDADE</h3>
          </div>
        </div>

          <Link to="/nossa-cultura" className="link-block-wrapper">
          <div className="column-right-block">
            <img src={require('../assets/quemsomos3.png')} alt="Nossa Cultura" />
            <div className="image-gray-bar">
              <h3>Nossa cultura</h3>
            </div>
          </div>
          </Link>

      </section>
    </>
  );
}

export default QuemSomosPage;
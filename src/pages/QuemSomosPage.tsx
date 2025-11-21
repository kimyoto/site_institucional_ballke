import React from "react";
import "./QuemSomosPage.css";
import { Link } from "react-router-dom";

function QuemSomosPage() {
  return (
    <>
      <section className="section-container quemsomos-hero-background">
        <h2 className="text-topo-quemsomos">Quem Somos</h2>
      </section>

      <section className="section-container text-images-quemsomos">
        <h2 className="quemsomos-grupoballke">Grupo Ballke</h2>
        <h2 className="quemsomos-text">
          Nosso propósito é impulsionar a melhoria contínua dos serviços de
          saúde e estimular a inovação no mercado. Atuamos fornecendo produtos e
          soluções que apoiam profissionais e instituições na conquista de
          resultados cada vez mais eficientes e relevantes no cenário nacional.
        </h2>
        <h2 className="quemsomos-text">
          Além disso, trabalhamos em conformidade com as regulamentações
          nacionais e internacionais, garantindo que todos os nossos produtos
          estejam em total conformidade com os mais altos padrões de qualidade.
        </h2>
        <h2 className="quemsomos-text">
          No Grupo Ballke, cada produto reflete nosso compromisso com a
          inovações, a precisão e o cuidado com a saúde. Convidamos você a
          explorar nossas soluções e ver como podemos agregar valor aos seus
          processos, contribuindo para resultados mais eficientes, sustentáveis
          e inovadores.
        </h2>
      </section>

      <section className="section-container quemsomos-images">
        <div>
          <img
            src={require("../assets/quemsomos1.png")}
            alt="Nossas áreas de atuação"
            className="quemsomos-section-imgs"
          ></img>
          <div className="gray-bar-atuacao">
            <h2 className="text-images-1">NOSSAS ÁREAS DE ATUAÇÃO</h2>
          </div>
        </div>

        <div className="quemsomos-duas-colunas">
          <div className="coluna">
            <img
              src={require("../assets/quemsomos2.png")}
              alt="Nossa Unidade"
              className="quemsomos-section-imgs"
            />
            <div className="image-gray-bar">
              <h2 className="text-images-1">NOSSA UNIDADE</h2>
            </div>
          </div>
          
          <div className="coluna">
            <Link to="/nossa-cultura" className="link-block-wrapper">
              <img
                src={require("../assets/quemsomos3.png")}
                alt="Nossa Cultura"
                className="quemsomos-section-imgs"
              />
              <div className="image-gray-bar">
                <h2 className="text-images-1">NOSSA CULTURA</h2>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container parceiros-section">
        <h2 className="parceiros-title">Parceiros</h2>

        <div className="logos-container">
          <img
            src={require("../assets/meta.png")}
            alt="Logo Meta"
            className="parceiros-logo logo-meta"
          />

          <img
            src={require("../assets/google.png")}
            alt="Logo Google"
            className="parceiros-logo logo-google"
          />

          <img
            src={require("../assets/optidata.png")}
            alt="Logo Optidata"
            className="parceiros-logo logo-optidata"
          />
        </div>
      </section>
    </>
  );
}

export default QuemSomosPage;

import React from "react";
import "./NossaCulturaPage.css";

function NossaCulturaPage() {
  return (
    <>
      <section className="section-container nossa-cultura-hero-background">
        <h2 className="nossa-cultura-hero-title">Nossa Cultura</h2>
      </section>

      <section className="section-container cultura-content-section">
        <h2 className="cultura-subtitle">Missão</h2>
        <p className="cultura-text">
          Ser um catalisador de negócios nas áreas da saúde e inovação, apoiando
          micro e pequenas empresas com estrutura, conhecimento e soluções para
          crescer de forma sustentável.
        </p>

        <h2 className="cultura-subtitle">Visão</h2>
        <p className="cultura-text">
          Tornar-se referência nacional em apoio estratégico a empresas da saúde
          e de inovação, reconhecido por transformar expertise e tecnologia em
          valor real para os parceiros e para o mercado.
        </p>

        <h2 className="cultura-subtitle">Nossos principais valores:</h2>

        <ul className="cultura-values-list">
          <li>Ética;</li>
          <li>Pró-atividade;</li>
          <li>Comprometimento com o cliente;</li>
          <li>Engajamento;</li>
          <li>Meritocracia sem discriminação;</li>
          <li>Ambiente propício para inovação.</li>
        </ul>
      </section>
    </>
  );
}

export default NossaCulturaPage;

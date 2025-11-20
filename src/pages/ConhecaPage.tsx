import React from "react";
import "./ConhecaPage.css";

function ConhecaPage() {
  return (
    <>
      <section className="conheca-hero-background">
        <h2 className="topo-text-1">
          Nossa trajetória
          <br />
          até aqui.
        </h2>
      </section>

      <section className="conheca-main-background">
        <h2 className="conheca-text-1">
          A história do Grupo Ballke é uma jornada construída com dedicação,
          inovação e compromisso com a excelência. Desde o seu início, buscamos
          transformar a saúde e o bem-estar das pessoas, oferecendo soluções
          eficientes e de alta qualidade nos segmentos em que atuamos.
        </h2>

        <h2 className="conheca-text-2">
          A cada novo desafio, reafirmamos nosso compromisso em entregar
          produtos e serviços que superem as expectativas de nossos clientes,
          sempre com foco no cuidado e na segurança. Ao longo de mais de 20 anos
          de atuação, o Grupo Ballke tem se destacado pela sua capacidade de
          adaptação e evolução, buscando constantemente aprimorar seus processos
          e garantir o melhor em cada entrega.
        </h2>

        <h2 className="conheca-text-3">
          Agora, ampliamos nosso olhar para contribuir ativamente com a inovação
          em diferentes áreas do mercado. Nossa missão é apoiar empresas e
          profissionais na superação de desafios, promovendo soluções
          estratégicas, tecnológicas e sustentáveis que gerem impacto real — na
          saúde e além dela.
        </h2>

        <img
          src={require("../assets/lona.png")}
          alt="Imagem Lona Conheça"
          className="conheca-lona-image"
        />
      </section>
    </>
  );
}

export default ConhecaPage;

import React from "react";
import "./MarcasPage.css";

function MarcasPage() {
  return (
    <>
      <section className="section-container marcas-hero-background">
        <h2 className="marcas-title">Nossas Marcas</h2>
      </section>

      <section className="section-container marcas-content-section">
        <img
          src={require("../assets/magazinecolorido.png")}
          alt="Magazine Médica"
          className="marca-logo logo-magazine"
        />
        <p className="marca-text text-magazine">
          Com mais de 20 anos de experiência no mercado, a Magazine Médica é uma
          marca consolidada no fornecimento de produtos médicos para
          profissionais da saúde, clínicas e consultórios. A Magazine Médica
          atua com foco no varejo médico, oferecendo mais de 10 mil produtos em
          seu e-commerce e mantendo um relacionamento próximo com os
          profissionais que cuidam da saúde no Brasil.
        </p>

        <img
          src={require("../assets/nestsafecolorido.png")}
          alt="Nestsafe"
          className="marca-logo logo-nestsafe"
        />
        <p className="marca-text text-nestsafe">
          Criada para atender revendedores, farmácias, distribuidores e
          e-commerces, a Nestsafe oferece produtos médicos que combinam alto
          padrão de qualidade, conformidade regulatória e preços acessíveis. A
          Nestsafe se posiciona como uma solução estratégica para empresas que
          atuam na revenda de produtos para saúde. Sua linha inclui itens
          essenciais para o dia a dia de clínicas, hospitais e estabelecimentos 
          do setor, com garantia de procedência e confiabilidade.
        </p>

        <img
          src={require("../assets/bbranding.png")}
          alt="B.Branding"
          className="marca-logo logo-bbranding"
        />
        <p className="marca-text text-bbranding">TEXTO BBRANDIG </p>
      </section>
    </>
  );
}

export default MarcasPage;

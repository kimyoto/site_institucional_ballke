import React from "react";
import "./CarreirasPage.css";

function CarreirasPage() {
  return (
    <>
      <section className="section-container carreiras-hero-background">
        <h2 className="carreiras-hero-title">Carreiras</h2>
      </section>

      <section className="section-container carreiras-text">
        <h2 className="carreiras-text1">
          Faça parte de uma equipe que transforma desafios em inovação e promove
          soluções sustentáveis para um mundo melhor. No Grupo Ballke,
          acreditamos no poder das pessoas e investimos no desenvolvimento de
          talentos. Aqui, você encontrará um ambiente colaborativo,
          oportunidades de crescimento e a chance de contribuir ativamente para
          projetos de impacto global. Junte-se a nós e construa um futuro
          repleto de propósito e sucesso profissional. Explore nossas
          oportunidades e venha fazer a diferença!
        </h2>
      </section>

      <section className="section-container vagas-hero">
        <h2 className="vagas">Vagas</h2>
      </section>

      <section className="section-container vagas-lista-container">
        <table className='vagas-table'>
          <tbody>
            <tr>
              <td>Estoquista</td>
              <td>Concórdia - SC</td>
              <td>Efetivo</td>
            </tr>
            <tr>
              <td>Auxiliar de limpeza</td>
              <td>Concórdia - SC</td>
              <td>Temporário</td>
            </tr>
            <tr>
              <td>Tecnologia da Informação (TI)</td>
              <td>Chapecó - SC</td>
              <td>Efetivo</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default CarreirasPage;

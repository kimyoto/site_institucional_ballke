import React, { useState } from "react";
import "./CarreirasPage.css";
import CampoDeTexto from "../components/campo-de-texto/CampoDeTexto";
import BotaoPagina from "../components/botao-pagina/BotaoPagina";

function CarreirasPage() {
  const [desabilitarCampoDescritivo, setDesabilitarCampoDescritivo] = useState(true);
  const [selecionado, setSelecionado] = useState<'sim' | 'nao' | null>(null); 
 
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


    <section className="section-container informacoes-pessoais-container" >
      <h2 className="informacoes">Informações pessoais</h2>
      <form className="form-container"> 
        <div className="um-campo">
          <CampoDeTexto placeholder="Nome completo"/>
        </div>
        <div className='multiplos-campos'>
          <CampoDeTexto placeholder="Email"/>
          <CampoDeTexto placeholder="Idade"/>
          <CampoDeTexto placeholder="Telefone de contato"/>
        </div>
        <div className="um-campo">
          <CampoDeTexto placeholder="Para qual área ou cargo voce se deseja candidatar?"/>
        </div>
      </form>
      <text className="carreiras-text1">Você tem experiência na área ou cargo desejada?</text>
      <div className="button-container">
        <BotaoPagina texto="Sim" isSelected={selecionado === 'sim'} onClick={() => { setDesabilitarCampoDescritivo(false); setSelecionado('sim'); }}/>
        <BotaoPagina texto="Não" isSelected={selecionado === 'nao'} onClick={() => { setDesabilitarCampoDescritivo(true); setSelecionado('nao'); }}/>
        <CampoDeTexto placeholder="Deixar descritivo" desabilitar={desabilitarCampoDescritivo}/> 
      </div>
      <div className="button-enviar-container">
        <button className="botao-enviar-container text">Faça upload do seu curriculo <br/>(formato PDF ou Word)</button>
      </div>
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

import React, { useState, useEffect } from "react";
import "./CarreirasPage.css";
import CampoDeTexto from "../components/campo-de-texto/CampoDeTexto";
import BotaoPagina from "../components/botao-pagina/BotaoPagina";

interface CarreirasHeroSection {
  hero_bg_img: string | null;
  hero_text: string | null;
}

interface CarreirasFormSection {
  form_intro_text: string | null;
  form_title: string | null;
  form_name: string | "";
  form_email: string | "";
  form_age: string | "";
  form_phone: string | "";
  form_position: string | "";
  form_experience: string | "";
  form_experience_details: string | "";
  form_upload_text1: string | null;
  form_upload_text2: string | null;
  form_btn_text: string | null;
}

interface CarreirasPositionsSection {
  positions_title: string | null;
  positions_location: string | null;
  positions_job_type: string | null;
}

interface CarreirasPageData {
  hero_section: CarreirasHeroSection;
  form_section: CarreirasFormSection;
  positions_section: CarreirasPositionsSection[];
}

function CarreirasPage() {
  const [desabilitarCampoDescritivo, setDesabilitarCampoDescritivo] = useState(true);
  const [selecionado, setSelecionado] = useState<'sim' | 'nao' | null>(null);
  const [textoDescritivo, setTextoDescritivo] = useState(''); 
  const [content, setContent] = useState<CarreirasPageData | null>(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/carreiras/`)
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => {
        console.error("Erro ao buscar dados da página de Carreiras:", error);
        setContent({
          hero_section: {
            hero_bg_img: require("../assets/carreiras-bkg.png"),
            hero_text: "Carreiras",
          },
          form_section: {
            form_intro_text: "Faça parte de uma equipe que transforma desafios em inovação e promove soluções sustentáveis para um mundo melhor. No Grupo Ballke, acreditamos no poder das pessoas e investimos no desenvolvimento de talentos. Aqui, você encontrará um ambiente colaborativo, oportunidades de crescimento e a chance de contribuir ativamente para projetos de impacto global. Junte-se a nós e construa um futuro repleto de propósito e sucesso profissional. Explore nossas oportunidades e venha fazer a diferença!",
            form_title: "Informações pessoais",
            form_name: "Nome completo:",
            form_email: "E-mail:",
            form_age: "Idade:",
            form_phone: "Telefone de contato:",
            form_position: "Para qual área ou cargo você deseja se candidatar?",
            form_experience: "Você tem experiência na área ou cargo desejada?",
            form_experience_details: "Deixar descritivo",
            form_upload_text1: "Faça upload do seu currículo",
            form_upload_text2: "(formato PDF ou Word)",
            form_btn_text: "Enviar currículo",
          },
          positions_section: []
        })
      });
  }, []);

  if (!content) return <p>Carregando...</p>;

  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${content.hero_section.hero_bg_img})
    `
  }
 
  return (
    <>
      <section className="section-container carreiras-hero-background" style={heroStyle}>
        <h2 className="carreiras-hero-title">{content.hero_section.hero_text}</h2>
      </section>

      <section className="section-container carreiras-text">
        <h2 className="carreiras-text1">
          {content.form_section.form_intro_text}
        </h2>
      </section>

    <section className="section-container informacoes-pessoais-container" >
      <h2 className="informacoes">{content.form_section.form_title}</h2>
      <form className="form-container"> 
        <div className="um-campo">
          <CampoDeTexto placeholder={content.form_section.form_name}/>
        </div>
        <div className='multiplos-campos'>
          <CampoDeTexto placeholder={content.form_section.form_email}/>
          <CampoDeTexto placeholder={content.form_section.form_age}/>
          <CampoDeTexto placeholder={content.form_section.form_phone}/>
        </div>
        <div className="um-campo">
          <CampoDeTexto placeholder={content.form_section.form_position}/>
        </div>
      </form>
      <text className="carreiras-text1">{content.form_section.form_experience}</text>
      <div className="button-container">
        <BotaoPagina texto="Sim" isSelected={selecionado === 'sim'} onClick={() => { setDesabilitarCampoDescritivo(false); setSelecionado('sim'); }}/>
        <BotaoPagina texto="Não" isSelected={selecionado === 'nao'} onClick={() => { setDesabilitarCampoDescritivo(true); setSelecionado('nao'); setTextoDescritivo(''); }}/>
        <CampoDeTexto placeholder={content.form_section.form_experience_details} desabilitar={desabilitarCampoDescritivo} valor={textoDescritivo} onChange={setTextoDescritivo}/> 
      </div>
      <div className="button-enviar-container">
        <button className="botao-enviar-container text">{content.form_section.form_upload_text1}<br/>{content.form_section.form_upload_text2}</button>
      </div>
    </section>

      {/* Positions Section */}
      {content.positions_section && content.positions_section.length > 0 ? (
        <>
          <section className="section-container vagas-hero">
            <h2 className="vagas">Vagas</h2>
          </section>
          <section className="section-container vagas-lista-container">
            <table className='vagas-table'>
              <tbody>
                {content.positions_section.map(position => (
                  <tr>
                    <td>{position.positions_title}</td>
                    <td>{position.positions_location}</td>
                    <td>{position.positions_job_type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </>
      ) : (
        <div style={{ marginTop: '32px' }}></div>
      )}
    </>
  );
}

export default CarreirasPage;

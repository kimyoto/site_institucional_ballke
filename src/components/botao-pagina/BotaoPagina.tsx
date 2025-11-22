import React from "react";
import "./BotaoPagina.css";

export default function BotaoPagina(props: { texto: string, onClick?: () => void }) {
  return (
    <button className="botao-pagina-container" onClick={props.onClick}>
      <text className="botao-pagina-text">{props.texto}</text>
    </button>
  );
}
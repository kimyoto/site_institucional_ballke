import React, { ReactNode } from "react";
import "./BotaoPagina.css";

export default function BotaoPagina(props: { texto: string | ReactNode, onClick?: () => void }) {
  return (
    <button className="botao-pagina-container" onClick={props.onClick}>
      {typeof props.texto === 'string' ? <text>{props.texto}</text> : props.texto}
    </button>
  );
}
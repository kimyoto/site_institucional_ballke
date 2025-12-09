import React, { ReactNode } from "react";
import "./BotaoPagina.css";

interface BotaoPaginaProps {
  texto: string | ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
  type?: "button" | "submit" | "reset"; 
}

export default function BotaoPagina(props: BotaoPaginaProps) {
  return (
    <button
      type={props.type ?? 'button'}
      className={`botao-pagina-container ${props.isSelected ? 'selected' : ''}`}
      onClick={props.onClick}
    >
      {typeof props.texto === 'string' ? <text>{props.texto}</text> : props.texto}
    </button>
  ); 
}
import React from 'react';
import './CampoDeTexto.css';

export default function CampoDeTexto(props: {
  placeholder: string;
desabilitar?: boolean;})  {
    return (
      <div className="campo-de-texto-container">
        <input
          type="text"
          placeholder={props.placeholder}
          disabled={props.desabilitar}
        />
      </div>
    );

}
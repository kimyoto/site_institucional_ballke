import React from 'react';
import './CampoDeTexto.css';

export default function CampoDeTexto(props: {
  placeholder: string;
  desabilitar?: boolean;
  valor?: string;
  onChange?: (valor: string) => void;
  required?: boolean;
})  {
    return (
      <div className="campo-de-texto-container">
        <input
          type="text"
          placeholder={props.placeholder}
          disabled={props.desabilitar}
          value={props.valor || ''}
          onChange={(e) => props.onChange?.(e.target.value)}
          required={props.required}
        />
      </div>
    );

}
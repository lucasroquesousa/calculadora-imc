import React from "react";
import { ContainerMain } from "./style.module";

const MainImc = () => {
  return (
    <ContainerMain>
      <div className="div-calc">
        <h1>Calcule aqui seu Imc</h1>
        <input
          className="input-calc"
          type="text"
          placeholder="Altura: ex: 1,80"
        />
        <input className="input-calc" type="text" placeholder="Peso: ex: 70" />
        <button>Calcular</button>
      </div>
    </ContainerMain>
  );
};

export default MainImc;

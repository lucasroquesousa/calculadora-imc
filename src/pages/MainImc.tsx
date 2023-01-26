import React from "react";
import { levels } from "../helpers/imc";
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
      <div className="div-display">
        {levels.map((item, key) => (
          <div key={key}>{item.title}</div>
        ))}
      </div>
    </ContainerMain>
  );
};

export default MainImc;

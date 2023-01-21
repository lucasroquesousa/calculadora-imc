import React from "react";
//estilização
import { Container } from "./styles";
//imagens
const logo = require("../../assets/img/Logotipo.png");

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="" className="logo" />
    </Container>
  );
};

export default Header;

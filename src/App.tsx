import React from "react";
import Header from "./components/header/Header";
import { GlobalStyle } from "./css/globalStyles";
import MainImc from "./pages/MainImc";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainImc />
    </>
  );
}

export default App;

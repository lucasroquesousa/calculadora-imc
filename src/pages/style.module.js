import styled from "styled-components";

export const ContainerMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;

  .div-calc {
    width: 350px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h1 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 35px;
      letter-spacing: 1px;
      color: #929394;
      text-shadow: 2px 1px 3px grey;
    }

    input {
      width: 200px;
      border: none;
      border-bottom: 1px solid #929394c1;
      padding: 3px 0px;
    }

    button {
      border: 3px solid #e8eaeb42;
      width: 200px;
      padding: 8px;
      border-radius: 8px;
      background-color: #9322fc;
      color: white;
      cursor: pointer;
      :hover {
        background-color: #e8eaeb42;
        color: #9322fc;
      }
    }
  }
`;

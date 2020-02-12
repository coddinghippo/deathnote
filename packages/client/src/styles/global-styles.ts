import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${reset};
@font-face {
  font-family:'Margarine';
  src: url(${require("../fonts/Margarine-Regular.ttf")});
}
  * {
      box-sizing: border-box;
      background: #000;
      color: white;
  }

  body{
    padding: 2rem;
    font-family: 'Margarine', sans-serif;
  }

  a{
    color: unset;
    &:hover{
      color: unset;
    }
  }

  strong{
    font-weight: 700;
  }
  
  button{
    cursor: pointer;
    background-color: white;
    outline: none;
    border: none;
    &:active {
      outline: none;
      border: none;
    }
  }

`;

import { colors, fonts } from './_mixin';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset};
@font-face {
  font-family:'Margarine';
  src: url(${require("../fonts/Margarine-Regular.ttf")});
}

@font-face {
  font-family:'Tauri';
  src: url(${require("../fonts/Tauri-Regular.ttf")});
}

  * {
      box-sizing: border-box;
      background: ${colors.defaultBlack};
      color: white;
  }

  body{
    padding: 2rem;
    font-family: ${fonts.generalFont}, sans-serif;
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

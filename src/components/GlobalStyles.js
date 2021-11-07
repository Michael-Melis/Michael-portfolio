import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
   background:#151515;
    min-height: 100vh;
    font-family: "Roboto Mono",sans-serif;
    
    
}
a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

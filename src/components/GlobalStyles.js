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
    
    
}
a {
    text-decoration: none;
  }
`;
export default GlobalStyle;

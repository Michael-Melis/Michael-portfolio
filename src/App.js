//Global styles
import GlobalStyle from "./components/GlobalStyles";
//import pages
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
//styled components
import styled from "styled-components";
//import components
//importHaslink
import { HashLink } from "react-router-hash-link";

function App() {
  return (
    <div>
      <GlobalStyle />
      <TopMenu>
        <ul>
          <HashLink smooth to="#about">
            <li>about</li>
          </HashLink>

          <HashLink smooth to="#work">
            <li>work</li>
          </HashLink>
          <HashLink smooth to="#contact">
            <li>contact me</li>
          </HashLink>
          <li>resume</li>
        </ul>
      </TopMenu>
      <Landing />
      <About />
      <Work />
      <Contact />
    </div>
  );
}
const TopMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;

  position: sticky;
  top: 0;

  background: #1d1d1d;

  ul {
    display: flex;
    flex-direction: row;
    color: #fff;
    align-items: flex-end;
    font-family: "Roboto Mono", monospace;
  }

  li {
    list-style: none;
    margin: 1rem;
    cursor: pointer;
    color: #fff;
    &:hover {
      color: #2dd1a0;
      transition: 0.5s;
    }
  }
`;

export default App;

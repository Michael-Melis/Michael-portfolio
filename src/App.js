//Global styles
import GlobalStyle from "./components/GlobalStyles";
//import pages
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
//styled components
import styled from "styled-components";
//import components
//importHaslink
import { HashLink } from "react-router-hash-link";

function App() {
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div>
      <GlobalStyle />
      <TopMenu>
        <StyledLogo smooth to="#">
          MICHAEL MELIS
        </StyledLogo>
        <ul>
          <HashLink smooth to="#about" scroll={(el) => scrollWidthOffset(el)}>
            <li>About</li>
          </HashLink>
          <HashLink smooth to="#work" scroll={(el) => scrollWidthOffset(el)}>
            <li>Work</li>
          </HashLink>
          <HashLink smooth to="#resume" scroll={(el) => scrollWidthOffset(el)}>
            <li>Resume</li>
          </HashLink>
          <HashLink smooth to="#contact">
            <li>Contact me</li>
          </HashLink>
        </ul>
      </TopMenu>
      <Landing />
      <About />
      <Work />
      <Resume />
      <Contact />
    </div>
  );
}
const TopMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 3;
  background: #1d1d1d;
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

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
const StyledLogo = styled(HashLink)`
  font-size: 2rem;
  color: #2dd1a0;
  font-family: "Orbitron", sans-serif;
  align-items: center;
`;

export default App;

//Global styles
import GlobalStyle from "./components/GlobalStyles";
//import pages
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
//styled components
import styled from "styled-components";
//import components

function App() {
  return (
    <div>
      <GlobalStyle />
      <TopMenu>
        <ul>
          <li>about</li>
          <li>work</li>
          <li>contact me</li>
          <li>resume</li>
        </ul>
      </TopMenu>
      <Landing />
      <About />
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
  width: 100%;

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
    &:hover {
      color: #2dd1a0;
      transition: 0.5s;
    }
  }
`;

export default App;

//Global styles
import GlobalStyle from "./components/GlobalStyles";
//import pages
import Landing from "./pages/Landing";
import About from "./pages/About";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Landing />
      <About />
    </div>
  );
}

export default App;

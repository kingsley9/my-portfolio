import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import "./app.scss";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        <About />
        <Works />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;

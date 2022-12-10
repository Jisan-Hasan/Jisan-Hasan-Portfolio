import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;

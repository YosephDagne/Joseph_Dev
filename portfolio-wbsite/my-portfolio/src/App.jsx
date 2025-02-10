import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import MyWork from "./components/MyWork";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;

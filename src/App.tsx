import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Joanna from "./components/Joanna";
import Justyna from "./components/Justyna";
import Oferta from "./components/Oferta";
import Guide from "./components/Guide";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-Merriweather w-full h-full flex flex-col overflow-x-hidden">
      <Hero />
      <About />
      <Joanna />
      <Justyna />
      <Oferta />
      <Guide />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

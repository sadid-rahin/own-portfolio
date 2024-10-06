import Header from './components/Header';
import Hero from './components/Hero';

import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Project';
import Experience from './components/Experience';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </>
  );
}

export default App;

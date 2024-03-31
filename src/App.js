import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import particles from './utils/particles';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import { Route, Routes } from 'react-router';
import ResumeTimeLine from './components/cv/ResumeTimeLine';
import Footer from './components/footer/Footer';


function App() {
  const [init, setInit] = useState(false);
  var bodyHeight = document.body.offsetHeight;
console.log("Hauteur du corps de la page : " + bodyHeight + " pixels");
  useEffect(() => {

    initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      
    }).then(() => {
      setInit(true);
    });
  }, []);
 

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = useMemo(
    () => (particles),
    [],
  );
  
  return (
  <>
    {init ?  <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      /> : ''}
    
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/#Home' element={<Home/>}/>
      <Route path='/#About' element={<About/>}/>
      <Route path='/#Portfolio' element={<Portfolio/>}/>
      <Route path='/#Resume' element={<ResumeTimeLine/>}/>
      <Route path='/#Contact' element={<Contact/>}/>
    </Routes>
    <Home/>
    <About/>
    <Portfolio/>
    <ResumeTimeLine/>
    <Contact/>
    <Footer/>
    
  </>
  );
}

export default App;

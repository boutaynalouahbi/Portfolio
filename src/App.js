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
import { ClipLoader } from 'react-spinners';


function App() {
  const [init, setInit] = useState(false);
  const [loading ,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      
    }).then(() => {
        setInit(true);
        setLoading(false);
    })
  }, []);
 

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = useMemo(
    () => (particles),
    [],
  );
  const Mparticles= ()=>{
    if(init){
      return <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    /> 
    }else{
      return ''
    }
  }
//   init && <Particles
//   id="tsparticles"
//   particlesLoaded={particlesLoaded}
//   options={options}
// /> 
  
  return (
  <>
    {loading ? <div style={{width:'100%' ,height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}> <ClipLoader color="#ff8b52" loading={loading} size={150} /> </div> : <div>
    {Mparticles() }
    
    <Navbar/>
    <Routes>
    <Route path="/" />
    </Routes>
    <Home/> 
      <About/>
      <Portfolio/>
      <ResumeTimeLine/>
      <Contact/>
    <Footer/>
    </div>}
  </>
  );
}

export default App;

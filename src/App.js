import React from 'react'
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import './styles.css';
import Foto from './components/AboutMe/Myphoto/Foto';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

//useEffect - renderizar os dados acrecentados - loading
//useRef - 
// array - 
//didamount - mostrar data 
//axios  - fetch api json / get / update 
//useState - cores 
//props - 
//previwState
//events - onCLick, onChange , Handle
//condicionais e funcoes
//setInterval -  loading
//musica? video?
//font e cores
//link whats 
// AboutMe, botao ver mais.. ter mapa
// apenas 3 cards de projetoc e botao ver mais
//filter , reduce , slice, pop , push , foreach , dom -( comentarios - data - email ) - reverse, assin , every
function App() {
  
  return (
    <div className='app'>
      <Header/>
      <AboutMe />
      <Contact/>
      <Foto />
      <Projects />
      <Footer/>
      
    </div>
  );
}

export default App;

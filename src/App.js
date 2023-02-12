import React from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AllMe from '../src/components/AllMe/AllMe'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";

import "./styles.css";
import ContactForm from "./components/Contact/Contact";

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
    <BrowserRouter className="app">
    
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/aboutme" element={<AllMe />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;

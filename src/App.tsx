import React from 'react';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import { Service } from './components/Service';
import { Skilss } from './components/Skills';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
     <Header />
     <Home />
     <About />
     <Service />
     <Skilss />
     <Portfolio />
     <Contact />
     <Footer />
    </>
  )
}

export default App;

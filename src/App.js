import React from 'react';
import './App.css';
import Nav from './componentes/Nav/Nav';
import Footer from './componentes/footer/Footer';
import Home from './pages/Home/Home'
import MaisInformacoes from './pages/sobre/MaisInformacoes'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InformacoesUteis from './pages/InformacoesUteis/InformacoesUteis';


function App() {
  return (
    <BrowserRouter>
    <Switch>

      <div className="base">
        <Nav />

        <Route exact path="/" render={() => <Home />} />
        <Route path="/maisinformacoes" render={() => <MaisInformacoes />} />
        <Route path="/informacoes-uteis" render={() => <InformacoesUteis /> } />
        <Footer />
      </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;

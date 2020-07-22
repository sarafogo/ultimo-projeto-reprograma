import React from 'react';

import './App.css';
import Nav from './componentes/Nav/Nav';


import Footer from './componentes/footer/Footer';
import Home from './pages/Home/Home'
import MaisInformacoes from './pages/sobre/MaisInformacoes'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LinksUteis from './pages/LinksUteis/LinksUteis';


function App() {
  return (
    <BrowserRouter>
    <Switch>

      <div>
        <Nav />

        <Route exact path="/" render={() => <Home />} />
        <Route path="/maisinformacoes" render={() => <MaisInformacoes />} />
        <Route path="/linksuteis" render={() => <LinksUteis /> } />
        <Footer />
      </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;

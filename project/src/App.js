import React, { Component } from "react";
import './assets/App.css';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import TeuFuturoDelas from "./components/TeuFuturoDelas/TeuFuturoDelas";
import DepoimentosGrid from "./components/DepoimentosGrid/DepoimentosGrid";
import NossaHistoria from "./components/NossaHistoria/NossaHistoria";
import Time from "./components/Time/Time";
import Apoiadores from "./components/Apoiadores/Apoiadores";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";
import DepoimentosModals from "./components/DepoimentosModals/DepoimentosModals";


class App extends Component {
  render() {
    return (
      <div id="page-top">
          <Navigation/>
          <Header/>
          <TeuFuturoDelas/>
          <NossaHistoria/>
          <DepoimentosGrid/>
          <Time/>
          <Apoiadores/>
          <Contato/>
          <Footer/>
          <DepoimentosModals/>
      </div>
    );
  }
}

export default App;

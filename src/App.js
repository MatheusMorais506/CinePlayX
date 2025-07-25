import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import Lancamentos from './pages/lancamentos/Lancamentos';
import Populares from './pages/Populares/Populares';
import Sobre from './pages/sobre/Sobre';
import Busca from './pages/busca/Busca';
import Serie from './pages/serie/Serie';
import Filme from './pages/filme/Filme';
import Series from './pages/series/Series';
import Filmes from './pages/filmes/Filmes';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <div className="main-content">
          <Switch>
            <Route exact path="/" component={Lancamentos} />
            <Route path="/lancamentos" component={Lancamentos} />
            <Route path="/populares" component={Populares} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/serie/:serieId" component={Serie} />
            <Route path="/busca" component={Busca} />
            <Route path="/filme/:filmeId" component={Filme}/>
            <Route path="/filmes" component={Filmes} />
            <Route path="/series" component={Series} />
          </Switch>
          </div>
           <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;

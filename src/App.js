import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import Examples from './screens/Examples/Examples';
import Features from './screens/Features/Features';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/exemplos" component={Examples} />
          <Route path="/funcionalidades" component={Features} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import Examples from './screens/Examples/Examples';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/exemplos" component={Examples} />
          <Route path="/recursos" component={null} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

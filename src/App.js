import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './reset.css';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={null} />
          <Route path="/exemplos" component={null} />
          <Route path="/recursos" component={null} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

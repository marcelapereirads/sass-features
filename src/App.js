import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import Examples from './screens/Examples/Examples';
import Features from './screens/Features/Features';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpened: false
    }

    this.menuOpenedListener = this.menuOpenedListener.bind(this);
  }

  menuOpenedListener = (opened) => {
    this.setState({ menuOpened: opened });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header menuOpened={this.menuOpenedListener} />
          <div style={ this.state.menuOpened ? { marginTop: '100px' } : { marginTop: 0 }}>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/exemplos" component={Examples} />
              <Route path="/funcionalidades" component={Features} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

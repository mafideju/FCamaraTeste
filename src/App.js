import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './containers/NavBar';
import Dashboard from './containers/Dashboard';
import PokemonService from './components/PokemonService/PokemonService';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container mt-10">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={PokemonService} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
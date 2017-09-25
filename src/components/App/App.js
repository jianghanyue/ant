import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import Home from '../Home/Home'
import Dashin from '../Dashin/Dashin'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/dashin' component={Dashin} />
        </div>
      </Router>
    );
  }
}

export default App;

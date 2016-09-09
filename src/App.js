import React, { Component } from 'react';
//import logo from '../assets/yoga-logo.png';
import './App.css';
const logoUrl=require('./assets/yoga-logo.png');

import Material from './components/Material-Component';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logoUrl} className="App-logo" alt="logo" />
          <h2>Welcome to YogaDathri</h2>
        </div>
        <p className="App-intro">
          <Material/>
        </p>
      </div>
    );
  }
}


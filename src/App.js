import React, { Component } from 'react';
//import logo from '../assets/yoga-logo.png';
import './App.css';
const logoUrl=require('./assets/yoga-logo.png');

import Material from './components/Material-Component';
import Header from './components/common/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Footer from './component/common/Footer';
//import MainApp from './component/Main';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logoUrl} className="App-logo" alt="logo" />
          <h2>Welcome to YogaDathri</h2>
        </div>
        <div className="jumbotron">
          <div className="container">
          <p>{`"GO FROM HUMAN BEING DOING YOGA TO A HUMAN BEING YOGA - Baron Baptiste"`}</p>
          <h3 className="App-Message">{`Currently we're working on this website`}</h3>
          <h3 className="App-Message">We will come soon be there !!</h3>
          <p></p>
          <p></p>
          <p><a className="btn btn-primary btn-lg" href="https://en.wikipedia.org/wiki/Yoga" role="button">More about YOGA</a></p>
          </div>
        </div>
      </div>
    );
  }

  // render(){
  //   return(
  //     <div>
  //       <Header/>
  //     </div>
  //   );
  // }
}

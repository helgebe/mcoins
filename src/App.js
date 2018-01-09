/*jshint esversion: 6 */
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//Components
//import Header from './Header';
import Footer from './Footer';
import Coin from './Coin';

//todo: replace with list fetched from coinmarketcap at first,
//then from enriched data in own database which is collected from several sources
//including user input on this system

class App extends Component {
  render() {
    return (
      <div>
      <h1>Mineable crypto currencies</h1>
      <section>
        <h2>Currencies</h2>
        <Coin/>
      </section>
      <Footer/>
      </div>
    );
  }
}

export default App;

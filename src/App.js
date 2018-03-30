import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.css';
import 'typeface-open-sans';
import 'typeface-Montserrat';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';

fontawesome.library.add(brands, faCoffee);

// Sample use of a icon in a template...

// const Beverage = () => (
//     <div>
//         <FontAwesomeIcon icon="check-square"/>
//         Favorite beverage: <FontAwesomeIcon icon="coffee"/>
//     </div>
// )


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

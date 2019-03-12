import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Containers
import NavBar from './containers/NavBar'
import Body from './containers/Body'
import Footer from './containers/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;

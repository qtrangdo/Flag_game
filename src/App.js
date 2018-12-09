import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Question from './components/Question';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Guess The Flag"/>
        {/* <Score/>
        <Question/>
        <Modal/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;

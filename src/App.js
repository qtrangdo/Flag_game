import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Question from './components/Question/Question';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Header branding="Guess The Flag"/>
          {/* <Score/> */}
          <Question/>
          {/* <Modal/> */}
          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default App;

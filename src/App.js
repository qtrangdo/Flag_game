import React, { Component } from 'react';
import Header from './components/Header';
import Score from './components/Score';
import Footer from './components/Footer';
import Question from './components/Question/Question';
import Result from './components/Result';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    showResult: false
  }
  toggleModal = () => this.setState({
    showResult: !this.state.showResult
  })
  render() {
    return (
      <Provider store={store}>
        <div className="App bg-light">
          <Header />
          <Score />
          <Question />
          <div className={`container ${this.state.showResult ? 'modal-open' : ''}`}>
            <div className="container">
              <div className="row">
                <div className="col-md-9">{' '}</div>
                <div className="col-md-3 d-flex justify-content-center">
                  <button type="button"
                    className="btn btn-success m-3 d-none Result"
                    data-toggle="modal" data-target="#resultModal"
                    onClick = { this.toggleModal }
                  >Result</button>
                </div>
              </div>
            </div>
            <Result toggle = {this.toggleModal} showModal={this.state.showModal}/>
          </div>
          <Footer />
        </div>
      </Provider>
    );
  }
}


export default App;

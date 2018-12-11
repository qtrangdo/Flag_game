import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { requestFlag } from './actions';
import './Question.css'

const mapStateToProps = state => {
  return {
    countries: state.countries.countries,
    country: state.countries.country,
    Pending: state.countries.Pending
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onRequestFlag: () => dispatch(requestFlag())
  }
}

//Getting Random Index for Random Options;

const getIndexes = (data) => {
    let indexes = [];
    while (indexes.length < 3) {
        let index = Math.floor(Math.random() * data.length)
        if (!indexes.includes(index)) {
            indexes.push(index)
        }
    }
    return indexes;
}


const shuffleOpts = (options) => {
    let shuffled = [];
    while (options.length){
        var index= Math.floor(Math.random()*options.length);
        var optionAtIndex = options.splice(index,1);
        shuffled.push(...optionAtIndex)
    }
    return shuffled;
}

class Question extends Component {
   
    componentDidMount() {
        this.props.onRequestFlag();
    }    

    render() {
        const {Pending} = this.props;
        const { name, flag } = this.props.country;
        const { countries } = this.props;
        let options = [name]
        
        if(!Pending && countries.length){
            let indexes = getIndexes(countries);
            for (let index of indexes){
                options.push(countries[index].name)
            }
            console.log(options);
            //options[0] is the correct answer
            let randomOptions= shuffleOpts(options);
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card card-body my-5 img-container">
                                <img src={flag}
                                    alt="testing"
                                    className="img-fluid h-100"
                                ></img>
                            </div>
                        </div>
                        <div className="col-md-5 d-flex justify-content-center align-self-center">
                            <form>
                                <div className="radio">
                                    <div className="mt-3">
                                        <input type="radio" name="option"></input>
                                        <span className="ml-3">{randomOptions[0]}</span>
                                    </div>
                                    <div className="mt-3">
                                        <input type="radio" name="option"></input>
                                        <span className="ml-3">{randomOptions[1]}</span>
                                    </div>
                                    <div className="mt-3">
                                        <input type="radio" name="option"></input>
                                        <span className="ml-3">{randomOptions[2]}</span>
                                    </div>
                                    <div className="mt-3">
                                        <input type="radio" name="option"></input>
                                        <span className="ml-3">{randomOptions[3]}</span>
                                    </div>
                                </div>
                                <button className="btn btn-primary m-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
       return null;
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Question);
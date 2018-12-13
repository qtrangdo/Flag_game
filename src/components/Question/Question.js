import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { requestFlag, scoreInfo } from './actions';
import Spinner from './spinner';
import './Question.css'


const mapStateToProps = state => {
  return {
    countries: state.countries.countries,
    country: state.countries.country,
    Pending: state.countries.Pending,
    score: state.scoreInfo.score,
    totalQuestion: state.scoreInfo.totalQuestion
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onRequestFlag: () => dispatch(requestFlag()),
    onUpdateScore: (correct,props) => dispatch(scoreInfo(correct,props))
  }
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
    
    //Getting Random Index for Random Options;
    getIndexes = (data) => {
        const {name} = this.props.country;
        const { countries } = this.props;
        let indexes = [];
        while (indexes.length < 3) {
            let index = Math.floor(Math.random() * data.length)
            if (!indexes.includes(index) && countries[index].name !== name) {
                indexes.push(index)
            }
        }
        return indexes;
    }

    correctAnswer = (data) => {
        if (data) return true;
        return false;
    }

    onClick = (event) => {
        // console.log(this.props)
        event.preventDefault();
        const { name } = this.props.country;
        const {score, totalQuestion} = this.props;
        let radios = document.getElementsByName('option');
        //radios is a NodeList --> need to convert to array
        let radioArray= Array.from(radios) 
        let correct = true;
        for (let i=0; i < radioArray.length; i++) {
            if (radios[i].checked === true){
                if(radios[i].value !== name){
                    var element = document.getElementById(radios[i].value);
                    element.className += " bg-danger";
                    correct = false;
                }
                let correctElement = document.getElementById(name);
                correctElement.className += " bg-success";
                document.getElementsByClassName('Submit')[0].classList.add("d-none");
                document.getElementsByClassName('Next')[0].classList.remove("d-none");
            }
        } 
        console.log(correct)
        this.props.onUpdateScore(correct,{score,totalQuestion})

        // console.log(radioArray, name)
    }

    onNext = (event) => {
        event.preventDefault();
        this.componentDidMount();
    }


    render() {
        const {Pending} = this.props;
        const { name, flag } = this.props.country;
        const { countries } = this.props;
        let options = [name]
        
        if(!Pending && countries.length){
            let indexes = this.getIndexes(countries);
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
                            <div className="card card-body mb-4 mt-5 img-container">
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
                                        <input type="radio" name="option" value={randomOptions[0]} ></input>
                                        <span className="ml-3 p-2" id={randomOptions[0]}>{randomOptions[0]}</span>  
                                    </div>
                                    <div className="mt-3">
                                        <input type="radio" name="option" value={randomOptions[1]} ></input>
                                        <span className="ml-3 p-2" id={randomOptions[1]}>{randomOptions[1]}</span>
                                    </div>
                                    <div className="mt-3">
                                        <input type="radio" name="option" value={randomOptions[2]} ></input>
                                        <span className="ml-3 p-2" id={randomOptions[2]}>{randomOptions[2]}</span>
                                    </div>
                                    <div className="mt-3">
                                        <input type="radio" name="option" value={randomOptions[3]} ></input>
                                        <span className="ml-3 p-2" id={randomOptions[3]}>{randomOptions[3]}</span>
                                    </div>
                                </div>
                                <button className="btn btn-primary m-3 Submit" onClick={this.onClick}>Submit</button>
                                <button className="btn btn-outline-primary m-3 d-none Next" onClick={this.onNext}>Next</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
       return <Spinner/>;
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Question);
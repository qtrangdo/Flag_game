import React, { Component } from 'react';


const Question = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 bg-dark px-5">
                    <div className="card card-body my-5">
                        <img src="https://restcountries.eu/data/afg.svg"
                            alt="testing"
                            className="img-fluid"
                            height="50" width="auto"
                        ></img>
                    </div>
                </div>
                <div className="col-md-5 d-flex justify-content-center align-self-center">
                    <form>
                        <div className="radio">
                            <div className="mt-3">
                                <input type="radio" name="option"></input>
                                <span className="ml-3">Country_1</span>
                            </div>
                            <div className="mt-3">
                                <input type="radio" name="option"></input>
                                <span className="ml-3">Country_2</span>
                            </div>
                            <div className="mt-3">
                                <input type="radio" name="option"></input>
                                <span className="ml-3">Country_3</span>
                            </div>
                            <div className="mt-3">
                                <input type="radio" name="option"></input>
                                <span className="ml-3">Country_4</span>
                            </div>
                        </div>
                        <button className="btn btn-primary m-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Question;
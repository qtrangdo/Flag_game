import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        score: state.scoreInfo.score
    }
}

//no dispatch needed
const mapDispatchToProps = dispatch => {
    return {};
}


class Result extends Component {
    render() {
        const {score} = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">{' '}</div>
                        <div className="col-md-3 d-flex justify-content-center">
                            <button className="btn btn-outline-success m-3 d-none Result" data-toggle="modal" data-target="#resultModal" onClick={this.onResult}>Result</button>
                        </div>
                    </div>
                </div>
                
                <div className="modal fade text-dark" id="resultModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Your Result</h5>
                                <button className="close" data-dismiss="modal">
                                    <span> &times; </span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>You got {Number(score)} out of 5 flags correctly</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-success btn-block">Restart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Result);
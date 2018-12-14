import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        score: state.scoreInfo.score,
        totalQuestion: state.scoreInfo.totalQuestion
    }
}

//no dispatch needed
const mapDispatchToProps = dispatch => {
    return {};
}


class Result extends Component {
    state = {
        showResult: false
    }

    toggleModal = () => this.setState({
        showResult: !this.state.showResult
    })
    
    restart = () => this.forceUpdate()

    render() {
        const { score,totalQuestion } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">{' '}</div>
                        <div className="col-md-3 d-flex justify-content-center">
                            <button onClick={this.toggleModal} type="button" 
                                className="btn btn-info m-3 d-none Result" 
                                data-toggle="modal" data-target="#resultModal"
                            >Result</button>
                        </div>
                    </div>
                </div>
                <div onClick={this.toggleModal}
                    show={(this.state.showResult).toString()}
                    className="modal" 
                    style={{
                        display: `${this.state.showResult ? 'block' : 'none'}`
                    }}
                    id="resultModal" 
                    tabIndex="-1" 
                    role="dialog" 
                    aria-labelledby="resultModalCenterTitle" 
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Your Result</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"> &times; </span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>You got {Number(score)} out of {Number(totalQuestion)}  flags correctly. Nice play!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-warning btn-block" onClick={this.restart}>Restart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Result);
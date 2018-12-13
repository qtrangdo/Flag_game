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

class Score extends Component {
    render (){
        let {score, totalQuestion} = this.props;
        return (
            <div className="container">
                <div className='bg-info text-white d-flex pt-1 justify-content-center'>
                    <h3 >Current Score:{' '}
                        <span>{Number(score)} / {Number(totalQuestion)}</span>
                        <i className="far fa-smile-beam ml-3"></i>
                    </h3>
                </div>
            </div>      
        )
    }  
}

export default connect(mapStateToProps,mapDispatchToProps)(Score);
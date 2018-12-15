import {
    REQUEST_FLAG_PENDING,
    REQUEST_FLAG_SUCCESS,
    REQUEST_FLAG_FAILED,
    UPDATE_SCORE,
    UPDATE_TOTALQUESTION,
    UPDATE_FAILED,
    RESTART
} from './actiontypes';

export const requestFlag = () => (dispatch) => {
    dispatch({ type: REQUEST_FLAG_PENDING })
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_FLAG_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_FLAG_FAILED, payload: error }))
}

const updateScore = (props) => {
    let {score} = props || 0;
    let newScore = Number(score)+1;
    return (newScore.toString())
}
const updateTotalQuestion = (props) => {
    let {totalQuestion} = props || 0;
    let newTotalQuestion = Number(totalQuestion) + 1;
    return (newTotalQuestion.toString())
}

export const scoreInfo = (correct, props) => (dispatch) => {
    // console.log(correct, props)
    try{
        if (correct === true && props) {dispatch ({ type: UPDATE_SCORE, payload: updateScore(props)})};
        if (props) {dispatch ({ type: UPDATE_TOTALQUESTION, payload: updateTotalQuestion(props)})}
        if (correct === undefined && props === undefined){dispatch({type:RESTART, payload:'0'})}
    }
    catch (error){dispatch({type: UPDATE_FAILED, payload: "error"})}
}

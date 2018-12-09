import {
    REQUEST_FLAG_PENDING,
    REQUEST_FLAG_SUCCESS,
    REQUEST_FLAG_FAILED
} from './actiontypes';

export const requestFlag = () => (dispatch) => {
    dispatch({ type: REQUEST_FLAG_PENDING })
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json)
    .then(data => dispatch({ type: REQUEST_FLAG_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_FLAG_FAILED, payload: error }))
}
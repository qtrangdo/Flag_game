import {
    REQUEST_FLAG_PENDING,
    REQUEST_FLAG_SUCCESS,
    REQUEST_FLAG_FAILED
} from './actiontypes';

const initialState = {
    Pending: false,
    //including this Pending value to make a loading page;
    countries: [],
    country: {},
    error: ''
}


const requestFlag = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_FLAG_PENDING:
            return {
                ...state,
                Pending: true
            }
        case REQUEST_FLAG_SUCCESS:
            return {
                ...state,
                countries: action.payload,
                //randomize a country
                country: action.payload[Math.floor(Math.random() * action.payload.length)],
                Pending: false
            }
        case REQUEST_FLAG_FAILED:
            return {
                ...state,
                error: action.payload,
                Pending: false
            }
        default:
            return state;
    }
}

export default requestFlag;
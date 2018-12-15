import {
    REQUEST_FLAG_PENDING,
    REQUEST_FLAG_SUCCESS,
    REQUEST_FLAG_FAILED,
    UPDATE_SCORE,
    UPDATE_TOTALQUESTION,
    UPDATE_FAILED,
    RESTART
} from './actiontypes';

const initialState = {
    Pending: false,
    //including this Pending value to make a loading page;
    countries: [],
    country: {},
    error: '',
    score: '',
    totalQuestion:''
}


export const requestFlag = (state = initialState, action) => {
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
                Pending: false,
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


export const scoreInfo = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SCORE:{
            return {
                ...state,
                score: action.payload
            }
        }
        case UPDATE_TOTALQUESTION: {
            return {
                ...state,
                totalQuestion: action.payload
            }
        }
        case RESTART:{
            return {
                ...state,
                score: action.payload,
                totalQuestion: action.payload
            }
        }
        case UPDATE_FAILED: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;
    }

}
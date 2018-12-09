import {
    REQUEST_FLAG_PENDING,
    REQUEST_FLAG_SUCCESS,
    REQUEST_FLAG_FAILED
} from './actiontypes';

const initialState = {
    Pending: false,
    //not sure why including this Pending value;
    countries: [],
    error:''
}
export default requestFlag = (state = initialState, action) => {
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
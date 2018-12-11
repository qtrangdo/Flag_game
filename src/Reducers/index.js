import { combineReducers } from 'redux';
import requestFlag from '../components/Question/reducer';

export default combineReducers ({
    countries: requestFlag
})
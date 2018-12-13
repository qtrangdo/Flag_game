import { combineReducers } from 'redux';
import {requestFlag, scoreInfo} from '../components/Question/reducer';

export default combineReducers ({
    countries: requestFlag,
    scoreInfo: scoreInfo
})
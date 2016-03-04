import { combineReducers } from 'redux';
import { router } from 'redux-ui-router';
import businessCase from './busines-case-reducer';
import businessCases from './busines-cases-reducer';
import selectedBusinessCase from './selected-busines-case-reducer';

export default combineReducers({
    router,
    businessCase,
    businessCases,
    selectedBusinessCase
});

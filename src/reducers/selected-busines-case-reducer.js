import { BUSINESS_CASES_FETCHED, BUSINESS_CASE_SELECTED } from '../actions/business-case';

export default function (state = null, action) {
    switch (action.type) {
        case BUSINESS_CASES_FETCHED:
            return action.businessCases.open[0] || null;
        case BUSINESS_CASE_SELECTED:
            return action.businessCase;
        default:
            return state;
    }
}

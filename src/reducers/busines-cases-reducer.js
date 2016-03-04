import { BUSINESS_CASES_FETCHED } from '../actions/business-case';

export default function (state = null, action) {
    switch (action.type) {
        case BUSINESS_CASES_FETCHED:
            return action.businessCases;
        default:
            return state;
    }
}

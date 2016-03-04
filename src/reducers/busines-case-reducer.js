import { BUSINESS_CASE_FETCHED } from '../actions/business-case';

export default function (state = null, action) {
    switch (action.type) {
        case BUSINESS_CASE_FETCHED:
            return action.businessCase;
        default:
            return state;
    }
}

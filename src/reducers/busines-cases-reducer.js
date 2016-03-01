import { FETCH_BUSINESS_CASES, SELECT_BUSINESS_CASE } from '../actions/business-case';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_BUSINESS_CASES:
            return {
                businessCases: action.businessCases,
                selectedBusinessCase: action.businessCases.open[0]
            };
        case SELECT_BUSINESS_CASE:
            return Object.assign({}, state,
                {
                    selectedBusinessCase: findBusinessCase(state.businessCases, action.id)
                });
        default:
            return state;
    }
}

function findBusinessCase(businessCases, id) {
    return businessCases.open.find(businessCase => businessCase.id === id);
}
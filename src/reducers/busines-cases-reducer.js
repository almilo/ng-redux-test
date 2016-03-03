import { BUSINESS_CASES_FETCHED, BUSINESS_CASE_SELECTED } from '../actions/business-case';

export default function (state = {}, action) {
    switch (action.type) {
        case BUSINESS_CASES_FETCHED:
            return mutate({
                businessCases: action.businessCases,
                selectedBusinessCase: action.businessCases.open[0]
            });
        case BUSINESS_CASE_SELECTED:
            return mutate(
                {
                    selectedBusinessCase: findBusinessCase(state.businessCases, action.id)
                });
        default:
            return state;
    }

    function mutate(mutation) {
        return Object.assign({}, state, mutation);
    }
}

function findBusinessCase(businessCases, id) {
    return businessCases.open.find(byId) ||
        businessCases.pending.find(byId) ||
        businessCases.closed.find(byId);

    function byId(businessCase) {
        return businessCase.id === id;
    }
}

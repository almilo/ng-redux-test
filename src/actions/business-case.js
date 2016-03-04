export const BUSINESS_CASES_FETCHED = 'BUSINESS_CASES_FETCHED';
export const BUSINESS_CASE_FETCHED = 'BUSINESS_CASE_FETCHED';
export const BUSINESS_CASE_SELECTED = 'BUSINESS_CASE_SELECTED';

export default function (BusinessCaseService) {
    return {
        triggerFetchBusinessCases,
        triggerFetchBusinessCase,
        triggerArchiveBusinessCase,
        selectBusinessCase
    };

    function triggerFetchBusinessCases() {
        return dispatchWhenResolved(BusinessCaseService.getAllBusinessCases(), businessCasesFetched);
    }

    function triggerFetchBusinessCase(id) {
        return dispatchWhenResolved(BusinessCaseService.getBusinessCase(id), businessCaseFetched);
    }

    function triggerArchiveBusinessCase(id) {
        return dispatchWhenResolved(BusinessCaseService.archiveBusinessCase(id), triggerFetchBusinessCases);
    }

    function businessCasesFetched(businessCases) {
        return {
            type: BUSINESS_CASES_FETCHED,
            businessCases
        };
    }

    function businessCaseFetched(businessCase) {
        return {
            type: BUSINESS_CASE_FETCHED,
            businessCase
        };
    }

    function selectBusinessCase(businessCase) {
        return {
            type: BUSINESS_CASE_SELECTED,
            businessCase
        };
    }
}

function dispatchWhenResolved(promise, synchronousAction) {
    return dispatch => promise.then(result => dispatch(synchronousAction(result)));
}

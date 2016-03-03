export const BUSINESS_CASES_FETCHED = 'BUSINESS_CASES_FETCHED';
export const BUSINESS_CASE_SELECTED = 'BUSINESS_CASE_SELECTED';

export default function (BusinessCaseService) {
    return {
        triggerFetchBusinessCases,
        selectBusinessCase
    };

    function triggerFetchBusinessCases() {
        return (dispatch) => {
            BusinessCaseService.getAllBusinessCases().then(businessCases => {
                dispatch(businessCasesFetched(businessCases))
            });
        }
    }

    function businessCasesFetched(businessCases) {
        return {
            type: BUSINESS_CASES_FETCHED,
            businessCases
        };
    }

    function selectBusinessCase(id) {
        return {
            type: BUSINESS_CASE_SELECTED,
            id
        };
    }
}

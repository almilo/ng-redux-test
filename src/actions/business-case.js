export const FETCH_BUSINESS_CASES = 'FETCH_BUSINESS_CASES';
export const SELECT_BUSINESS_CASE = 'SELECT_BUSINESS_CASE';

export default function (BusinessCaseService) {
    return {
        fetchBusinessCases,
        selectBusinessCase
    };

    function fetchBusinessCases() {
        return (dispatch) => {
            BusinessCaseService.getAllBusinessCases().then(businessCases => {
                dispatch(fetch(businessCases))
            });
        }
    }
}

function fetch(businessCases) {
    return {
        type: FETCH_BUSINESS_CASES,
        businessCases
    };
}

function selectBusinessCase(id) {
    return {
        type: SELECT_BUSINESS_CASE,
        id
    };
}

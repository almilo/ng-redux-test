import { stateGo } from 'redux-ui-router';

export default function () {
    return {
        navigateToHome: _ => stateGo('home'),
        navigateToBusinessCase: _ => stateGo('business-case'),
        navigateToMoreOptions: id => stateGo('more-options', {id}),
        navigateToArchive: id => stateGo('archive', {id})
    };
}

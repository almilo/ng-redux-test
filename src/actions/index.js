import angular from 'angular';
import BusinessCaseActions from './business-case';
import NavigationActions from './navigation';

export default angular.module('app.actions', [])
    .service('BusinessCaseActions', BusinessCaseActions)
    .service('NavigationActions', NavigationActions);
import angular from 'angular';
import BusinessCaseActions from './business-case';

export default angular.module('app.actions', [])
    .service('BusinessCaseActions', BusinessCaseActions);
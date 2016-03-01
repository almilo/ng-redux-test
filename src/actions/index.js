import angular from 'angular';
import BusinessCaseAsyncActions from './business-case';

export default angular.module('app.actions', [])
    .service('BusinessCaseAsyncActions', BusinessCaseAsyncActions);
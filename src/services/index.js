import angular from 'angular';
import BusinessCaseService from './business-case-service';

export default angular.module('app.services', [])
    .service('BusinessCaseService', BusinessCaseService);
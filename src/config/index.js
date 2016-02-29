import angular from 'angular';
import angularUiRouter from 'angular-ui-router';

export default angular.module('app.config', [angularUiRouter])
    .config(($locationProvider, $urlRouterProvider) => {
        $locationProvider.html5Mode({enabled: true, requireBase: false});

        $urlRouterProvider.otherwise('/');
    });

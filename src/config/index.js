import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import actionsModule from '../actions/index';
import servicesModule from '../services/index';
import rootReducer from '../reducers/index';

export default angular.module('app.config',
    [
        angularUiRouter,
        ngRedux,
        servicesModule.name,
        actionsModule.name
    ])
    .config(($locationProvider, $urlRouterProvider) => {
        $locationProvider.html5Mode({enabled: true, requireBase: false});

        $urlRouterProvider.otherwise('/');
    })
    .config($ngReduxProvider => {
        $ngReduxProvider.createStoreWith(rootReducer, [thunk]);
    });

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngReduxRouter from 'redux-ui-router';
import thunk from 'redux-thunk';
import actionsModule from '../actions/index';
import servicesModule from '../services/index';
import rootReducer from '../reducers/index';

export default angular.module('app.config',
    [
        angularUiRouter,
        ngRedux,
        ngReduxRouter,
        servicesModule.name,
        actionsModule.name
    ])
    .config(($locationProvider, $urlRouterProvider) => {
        $locationProvider.html5Mode({enabled: false});

        $urlRouterProvider.otherwise('/');
    })
    .config($ngReduxProvider => {
        $ngReduxProvider.createStoreWith(rootReducer, ['ngUiRouterMiddleware', thunk]);
    });

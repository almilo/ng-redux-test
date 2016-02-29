import './index.css';
import 'expose?jQuery!jquery';
import 'angular';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'reflect-metadata';
import { bootstrap } from 'ng-forward';
import AppConfigModule from './config/index';
import AppComponent from './components/app-component';

bootstrap(AppComponent, [AppConfigModule.name]);
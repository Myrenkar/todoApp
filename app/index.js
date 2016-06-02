import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularFire from 'angularfire'
import firebase from 'firebase'
import routing from './config';

import main from './features/main';

const ngModule = angular
        .module('app', [
          uirouter, 
          main
        ])
        .config(routing);
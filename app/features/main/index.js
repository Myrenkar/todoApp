import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './main.routes';
import MainController from './main.controller';
import angularfire from 'angularfire'
import firebase from 'firebase'

export default angular.module('app.main', [uirouter, angularfire])
  .config(routing)
  .controller('MainController', MainController)
  .name;
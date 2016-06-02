import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './main.routes';
import MainController from './main.controller';
import 'firebase';
import angularFire from 'angularfire';


import login from './directives/login';
import todos from './directives/todos';

export default angular.module('app.main', [uirouter, angularFire])
  .config(routing)
  .controller('MainController', MainController)
  .directive('login', login)
  .directive('todos', todos)
  .name;
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './register.routes';
import RegisterController from './register.controller';
import 'firebase';
import angularFire from 'angularfire';



export default angular.module('app.register', [uirouter, angularFire])
  .config(routing)
  .controller('RegisterController', RegisterController)
  .name;
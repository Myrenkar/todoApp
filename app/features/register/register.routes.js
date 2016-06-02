export default function routes($stateProvider) {
  $stateProvider
    .state('register', {
      url: '/',
      template: require('./register.html'),
      controller: 'RegisterController',
      controllerAs: 'register'
    });
}
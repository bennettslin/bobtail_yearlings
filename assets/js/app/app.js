var bobtailApp = angular.module("BobtailApp", ["ngRoute", "ngSanitize", "ui.bootstrap"]);

bobtailApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })

  .when('/yearling', {
    templateUrl: '/views/yearling/index.html',
    controller: 'YearlingCtrl'
  })

  .when('/rosalind', {
    templateUrl: '/views/rosalind/index.html',
    controller: 'RosalindCtrl'
  })

  .otherwise({
    templateUrl: '/views/404.html'
  })

}]);
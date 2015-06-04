var bobtailApp = angular.module("BobtailApp", ["ngAnimate", "ngRoute", "ui.bootstrap", "plangular"])

.config(function(plangularConfigProvider) {

  // plangularConfigProvider.clientId = process.env.SOUNDCLOUD_CLIENT_ID;
  plangularConfigProvider.clientId = "9a75c80f2485b45360c7135eb3c4191e";
  console.log("Plangular client id is", plangularConfigProvider.clientId);
});


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
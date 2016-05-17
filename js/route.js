var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
   $routeProvider
       .when('/',{
           templateUrl: 'home.html'
       })
       .when('/player',{
           templateUrl: 'players.html'
       })
});
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
 var app =angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  app.controller('ContentController', ['$scope', '$ionicSideMenuDelegate', function($scope, $ionicSideMenuDelegate){
    $scope.toggleLeft = function(){
    
      $ionicSideMenuDelegate.toggleLeft();
      
    }
    
  }

  ]);
  app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $urlRouterProvider.otherwise('/home');
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
        })
  .state('order', {
            url: '/order',
            templateUrl: 'templates/order.html'
        })
  .state('menu', {
            url: '/menu',
            templateUrl: 'templates/menu.html'
        })

  // if none of the above states are matched, use this as the fallback
  

});

  
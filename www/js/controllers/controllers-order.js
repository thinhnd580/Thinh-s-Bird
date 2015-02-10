angular.module('MainApp.controllers.order', [])

	.controller('OrderController', function ($scope,$ionicModal, MenuService) {
        

        $scope.navTitle = MenuService.get(1).text;

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.sideMenuController.toggleLeft();
            }
        }];
        $scope.rightButtons = [{
            type: 'button-icon icon ion-gear-b',
            tap: function(e){
                $scope.sideMenuController.toggleRight();
            }
        }];


        $ionicModal.fromTemplateUrl('templates/modal.html', function($ionicModal) {
            $scope.modal = $ionicModal;}, {
            // Use our scope for the scope of the modal to keep it simple
            scope: $scope,
            // The animation we want to use for the modal entrance
            animation: 'slide-in-up'
        });
//         $ionicModal.config(['$stateProvider', '$urlRouterProvider',
//     function($stateProvider, $urlRouterProvider) {
//     // Ionic uses AngularUI Router which uses the concept of states
//     // Learn more here: https://github.com/angular-ui/ui-router
//     // Set up the various states which the app can be in.
//     // Each state's controller can be found in controllers.js
//     $stateProvider
//         .state('order.tab1', {
//                             url: '/orderTab1',
//                             controller: 'OrderTab1Controller',
//                             templateUrl: 'templates/order-tab1.html'
//                         })
//       }
// ]);
        $scope.openModal = function() {
            console.log('Opening Modal');
            $scope.modal.show();
        };
        $scope.closeModal = function(){
            $scope.modal.hide();
        }
        
    });

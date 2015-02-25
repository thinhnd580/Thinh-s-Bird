var orderControllers = angular.module('MainApp.controllers.order', ['ui.bootstrap']);

	orderControllers.controller('OrderController', function ($scope, $ionicModal, CategoryService) {
        $scope.navTitle = CategoryService.get(1).text;

        $ionicModal.fromTemplateUrl('templates/new-order-modal.html', function($ionicModal) {
                $scope.modal = $ionicModal;
            },
            {
                scope: $scope,
                animation: 'slide-in-up'
            }
        );
      
        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function(){
            $scope.modal.hide();
        };
    });

    orderControllers.controller('NewOrder', function($scope, MenuFoodService){
        $scope.restaurant = MenuFoodService.nameOfRestaurant();
        $scope.Currency = '$';

        $scope.order = {
            dishes: [],
            quantity: [],
            table: null,
            date: null,
            time: null
        };

        $scope.selectDish = function(dish){
            var index = $scope.order.dishes.indexOf(dish);

            if (index >= 0){
                if (!isNaN($scope.order.quantity[index]))
                    $scope.order.quantity[index]++;
                else
                    $scope.order.quantity[index] = 1;
            }
            else{
                $scope.order.dishes.push(dish);
                $scope.order.quantity.push(1);
            }
        };

        $scope.removeDish = function(dish){
            var index = $scope.order.dishes.indexOf(dish);
            $scope.order.dishes.splice(index, 1);
            $scope.order.quantity.splice(index, 1);
        };

        $scope.increaseQuantity = function(dish){
            var index = $scope.order.dishes.indexOf(dish);
            $scope.order.quantity[index]++;
        };

        $scope.valueOfOrder = function(){
            var total = 0;
            for (var i = 0; i<$scope.order.dishes.length ; i++){
                if (!isNaN($scope.order.quantity[i]))
                    total += parseFloat($scope.order.dishes[i].price)*parseInt($scope.order.quantity[i]);
            }
            return total;
        }

        $scope.decreaseQuantity = function(dish){
            var index = $scope.order.dishes.indexOf(dish);
            $scope.order.quantity[index]--;
            if ($scope.order.quantity[index] == 0)
                $scope.removeDish(dish);
        };

        $scope.resetOrder = function(){
            $scope.order.dishes = [];
            $scope.order.quantity = [];
            $scope.order.table = null;
            $scope.order.date = null;
            $scope.order.time = null;
        };

        $scope.clear = function () {
            $scope.order.date = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };
    });

    orderControllers.controller('SlideController', function($scope, $ionicSlideBoxDelegate){
        $scope.nextSlide = function() {
            $ionicSlideBoxDelegate.next();
        }

        $scope.prevSlide = function(){
            $ionicSlideBoxDelegate.previous();
        }
    });

    orderControllers.controller('MenuFoodTabController', function($scope, MenuFoodService){
        $scope.typeOfFood = [{
            'name' : 'Appetizer',
            'content' : MenuFoodService.appetizers()
        },{
            'name' : 'Main Course',
            'content' : MenuFoodService.mainCourses()
        },{
            'name' : 'Dessert',
            'content' : MenuFoodService.desserts()
        },{
            'name' : 'Drink',
            'content' : MenuFoodService.drinks()
        }];

        $scope.chosen = $scope.typeOfFood[0].name;
        $scope.setTab = function(tab){
            $scope.chosen = tab;
        }

        $scope.isSet = function(check){
            return $scope.chosen === check;
        }
    });
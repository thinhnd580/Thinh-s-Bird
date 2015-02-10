angular.module('MainApp.services', [])

/**
 * A simple example service that returns some data.
 */



.factory('MenuService', function() {

  var menuItems = [
      { text: 'Home', iconClass: 'icon ion-home', link: 'home'},
      { text: 'Order', iconClass: 'icon ion-document-text', link: 'order'},
      { text: 'Menu', iconClass: 'icon ion-clipboard', link: 'menu'},
      { text: 'Restaurant', iconClass: 'icon ion-star', link: 'restaurant'}
  ];

  return {
    all: function() {
      return menuItems;
    },

    get: function(index){
      return menuItems[index];
    },
  };
});

.factory('OrderService', function() {

  var orderItems = [
      { text: 'Shit', iconClass: 'icon ion-home'},
      { text: 'Shits', iconClass: 'icon ion-document-text'},
      { text: 'Piece of shit', iconClass: 'icon ion-clipboard'},
      { text: '2 Pieces of shit', iconClass: 'icon ion-star'}
  ];
  
  return {
    all: function() {
      return orderItems;
    },

    get: function(index){
      return orderItems[index];
    },
  };
});

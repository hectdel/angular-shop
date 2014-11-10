var shop = angular.module('shop', ['ngRoute']);
// configure our routes
shop.config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider
        // route for the home page
        .when('/index', {
           templateUrl : '/'
        })
        // route for the about page
        .when('/gestionLibros', {
            templateUrl : '/gestionLibros.html',
            controller : 'gestionLibrosCtr'
        })

        // route for the contact page
        .when('/tablaCuentas', {
            templateUrl : '/tablaCuentas.html'
        })
    }
]);
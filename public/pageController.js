var shop = angular.module('shop', ['ngRoute']);
// configure our routes
shop.config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider
        // route for the home page
        .when('#index', {
            templateUrl : '/asdas.html'
        })

        // route for the about page
        .when('#gestionLibros', {
            templateUrl : '/gestionLibros.html'
        })

        // route for the contact page
        .when('#tablaCuentas', {
            templateUrl : 'pages/contact.html'
        })
    }
]);

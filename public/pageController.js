var shop = angular.module('shop', ['ngRoute','ui.bootstrap']);
// configure our routes
shop.config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/index', {
           templateUrl : '/'
        })
        .when('/gestionLibros', {
            templateUrl : '/gestionLibros.html',
            controller : 'gestionLibrosCtr'
        })
        .when('/tablaCuentas', {
            templateUrl : '/tablaCuentas.html',
            controller : 'cuentasCtrl'
        })
    }
]);

shop.controller('gestionLibrosCtr', ['$scope', '$http', '$modal', '$log', function ($scope, $http, $modal, $log) {

    $scope.formData = {};
    $scope.librosList = [];

    $scope.searchFilter = function (libro) {
        var keyword = new RegExp($scope.textFilter, 'i');
        return !$scope.textFilter || keyword.test(libro.ISBN) || keyword.test(libro.Articulo) || keyword.test(libro.EAN);
    };

    // when landing on the page, get all todos and show them
    $http.get('/libros')
        .success(function (data) {
            $scope.librosList = data;
            $scope.totalItems =  $scope.librosList.length;
            $scope.currentPage = 1;
            $scope.numPerPage = 15;
        })
        .error(function (data) {
            $log.error('Error: ' + data);
        });


    $scope.paginate = function(value) {
        var begin, end, index;
        begin = ($scope.currentPage - 1) * $scope.numPerPage;
        end = begin + $scope.numPerPage;
        index = $scope.librosList.indexOf(value);
        return (begin <= index && index < end);
    };

    $scope.searchEAN = function(value) {
        $log.log("Buscar libro por EAN:",value);

        $http.get('/libros/EAN/'+value)
            .success(function (data) {
                $scope.librosList = data;
                $scope.totalItems =  $scope.librosList.length;
                $scope.currentPage = 1;
                $scope.numPerPage = 15;
            })
            .error(function (data) {
                $log.error('Error: ' + data);
            });
    };

    $scope.limpiar = function() {
        $log.log("limpiar Input EAN");
        $scope.ean = null;
        $scope.librosList = [];
        $scope.searchEAN("undefined");
    };

}]);

shop.controller('cuentasCtrl', ['$scope', '$http', '$modal', '$log', function ($scope, $http, $modal, $log) {

    $scope.formData = {};
    $scope.cuentasList = [];
    $scope.modalShown = false;

    $scope.searchFilter = function (cuenta) {
        var keyword = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || keyword.test(cuenta.name) || keyword.test(cuenta.email);
    };

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            backdrop: "static",
            scope: $scope,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    // when landing on the page, get all todos and show them
    $http.get('/cuentas')
        .success(function (data) {
            $scope.cuentasList = data;
            $log.log(data);
        })
        .error(function (data) {
            $log.error('Error: ' + data);
        });
}]);


shop.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
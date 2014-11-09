var shop = angular.module('shop', ['ui.bootstrap']);

shop.controller('gestionLibrosCtr', ['$scope', '$http', '$modal', '$log', function ($scope, $http, $modal, $log) {

    $scope.formData = {};
    $scope.librosList = [];

    // when landing on the page, get all todos and show them
    $http.get('/libros')
        .success(function (data) {

            $scope.librosList = data;
            $scope.totalItems =  $scope.librosList.length;
            $scope.currentPage = 1;
            $scope.numPerPage = 5;

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
}]);








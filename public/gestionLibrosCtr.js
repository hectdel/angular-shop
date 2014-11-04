var shop = angular.module('shop', []);

function gestionLibrosCtr($scope, $http) {
    $scope.formData = {};
    $scope.librosList = [];

    // when landing on the page, get all todos and show them
    $http.get('/libros')
        .success(function (data) {
            $scope.librosList = data;
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

}






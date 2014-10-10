var shop = angular.module('shop', []);

function cuentasCtrl($scope, $http) {
    $scope.formData = {};
    $scope.cuentasList = [];

    $scope.searchFilter = function (cuenta) {
        var keyword = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || keyword.test(cuenta.name) || keyword.test(cuenta.email);
    };

    // when landing on the page, get all todos and show them
    $http.get('/cuentas')
        .success(function (data) {
            $scope.cuentasList = data;
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });




}






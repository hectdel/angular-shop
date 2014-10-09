var shop = angular.module('shop', []);

function cuentasCtrl($scope, $http) {
    $scope.formData = {};
    $scope.cuentasList = [];
    // when landing on the page, get all todos and show them
    $http.get('/cuentas')
        .success(function (data) {
            console.log('entra ');
            $scope.cuentasList = data;
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

}



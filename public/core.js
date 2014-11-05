var shop = angular.module('shop', ['ui.bootstrap']);

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




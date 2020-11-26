(function () {
    'use strict';

    angular.module('application', [])
        .controller('AppController', AppController);

    AppController.$inject = ['$scope'];

    function AppController($scope) {
        $scope.result = "";
        $scope.products = "";

        $scope.showAnswer = function () {
            let products = $scope.products.split(',');
            for (let i =0; i <= products.length - 1; i++) {
                if (products[i].trim() === "") products.splice(i, 1);
            }
            if (products.length === 0) {
                 $scope.result = "Будь ласка, уведіть дані!";
            } else if (products.length <= 3) {
                 $scope.result = "На здоров'я!";
            } else {
                 $scope.result = "Це забагато!";
            }
        }
    }
})();
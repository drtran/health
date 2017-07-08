(function() {
    'use strict';

    angular
        .module('healthApp')
        .controller('PointsDetailController', PointsDetailController);

    PointsDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Points', 'User'];

    function PointsDetailController($scope, $rootScope, $stateParams, previousState, entity, Points, User) {
        var vm = this;

        vm.points = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('healthApp:pointsUpdate', function(event, result) {
            vm.points = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

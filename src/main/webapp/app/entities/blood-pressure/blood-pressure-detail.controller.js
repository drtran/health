(function() {
    'use strict';

    angular
        .module('healthApp')
        .controller('Blood_pressureDetailController', Blood_pressureDetailController);

    Blood_pressureDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Blood_pressure', 'User'];

    function Blood_pressureDetailController($scope, $rootScope, $stateParams, previousState, entity, Blood_pressure, User) {
        var vm = this;

        vm.blood_pressure = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('healthApp:blood_pressureUpdate', function(event, result) {
            vm.blood_pressure = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

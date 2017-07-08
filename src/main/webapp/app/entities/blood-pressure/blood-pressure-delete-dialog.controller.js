(function() {
    'use strict';

    angular
        .module('healthApp')
        .controller('Blood_pressureDeleteController',Blood_pressureDeleteController);

    Blood_pressureDeleteController.$inject = ['$uibModalInstance', 'entity', 'Blood_pressure'];

    function Blood_pressureDeleteController($uibModalInstance, entity, Blood_pressure) {
        var vm = this;

        vm.blood_pressure = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Blood_pressure.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();

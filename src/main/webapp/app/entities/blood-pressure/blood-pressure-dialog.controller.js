(function() {
    'use strict';

    angular
        .module('healthApp')
        .controller('Blood_pressureDialogController', Blood_pressureDialogController);

    Blood_pressureDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Blood_pressure', 'User'];

    function Blood_pressureDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Blood_pressure, User) {
        var vm = this;

        vm.blood_pressure = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.users = User.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.blood_pressure.id !== null) {
                Blood_pressure.update(vm.blood_pressure, onSaveSuccess, onSaveError);
            } else {
                Blood_pressure.save(vm.blood_pressure, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('healthApp:blood_pressureUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.date_time = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();

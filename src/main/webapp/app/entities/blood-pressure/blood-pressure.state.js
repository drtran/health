(function() {
    'use strict';

    angular
        .module('healthApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('blood-pressure', {
            parent: 'entity',
            url: '/blood-pressure',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'healthApp.blood_pressure.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/blood-pressure/blood-pressures.html',
                    controller: 'Blood_pressureController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('blood_pressure');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('blood-pressure-detail', {
            parent: 'blood-pressure',
            url: '/blood-pressure/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'healthApp.blood_pressure.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/blood-pressure/blood-pressure-detail.html',
                    controller: 'Blood_pressureDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('blood_pressure');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Blood_pressure', function($stateParams, Blood_pressure) {
                    return Blood_pressure.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'blood-pressure',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('blood-pressure-detail.edit', {
            parent: 'blood-pressure-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/blood-pressure/blood-pressure-dialog.html',
                    controller: 'Blood_pressureDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Blood_pressure', function(Blood_pressure) {
                            return Blood_pressure.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('blood-pressure.new', {
            parent: 'blood-pressure',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/blood-pressure/blood-pressure-dialog.html',
                    controller: 'Blood_pressureDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                date_time: null,
                                systolic: null,
                                diastolic: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('blood-pressure', null, { reload: 'blood-pressure' });
                }, function() {
                    $state.go('blood-pressure');
                });
            }]
        })
        .state('blood-pressure.edit', {
            parent: 'blood-pressure',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/blood-pressure/blood-pressure-dialog.html',
                    controller: 'Blood_pressureDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Blood_pressure', function(Blood_pressure) {
                            return Blood_pressure.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('blood-pressure', null, { reload: 'blood-pressure' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('blood-pressure.delete', {
            parent: 'blood-pressure',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/blood-pressure/blood-pressure-delete-dialog.html',
                    controller: 'Blood_pressureDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Blood_pressure', function(Blood_pressure) {
                            return Blood_pressure.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('blood-pressure', null, { reload: 'blood-pressure' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();

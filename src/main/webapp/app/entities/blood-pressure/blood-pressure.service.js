(function() {
    'use strict';
    angular
        .module('healthApp')
        .factory('Blood_pressure', Blood_pressure);

    Blood_pressure.$inject = ['$resource', 'DateUtils'];

    function Blood_pressure ($resource, DateUtils) {
        var resourceUrl =  'api/blood-pressures/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.date_time = DateUtils.convertLocalDateFromServer(data.date_time);
                    }
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.date_time = DateUtils.convertLocalDateToServer(copy.date_time);
                    return angular.toJson(copy);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.date_time = DateUtils.convertLocalDateToServer(copy.date_time);
                    return angular.toJson(copy);
                }
            }
        });
    }
})();

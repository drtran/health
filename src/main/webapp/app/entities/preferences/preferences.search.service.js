(function() {
    'use strict';

    angular
        .module('healthApp')
        .factory('PreferencesSearch', PreferencesSearch);

    PreferencesSearch.$inject = ['$resource'];

    function PreferencesSearch($resource) {
        var resourceUrl =  'api/_search/preferences/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();

'use strict';

/**
 * @ngdoc service
 * @name angularjsTrainingApp.Usersprovider
 * @description
 * # Usersprovider
 * Service in the angularjsTrainingApp.
 */
angular.module('angularjsTrainingApp')
  .service('DecksProvider', function ( $q , $http) {

        this.getDeck = function () {
            var url = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

            var deferred = $q.defer();

            $http.get(url).
                success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    deferred.reject();
                    console.log("could not retrieve deck");
                });
            return deferred.promise;
        };

  });

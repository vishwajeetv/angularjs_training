'use strict';

/**
 * @ngdoc service
 * @name angularjsTrainingApp.Cardsprovider
 * @description
 * # Cardsprovider
 * Service in the angularjsTrainingApp.
 */
angular.module('angularjsTrainingApp')
  .service('CardsProvider', function ( $q , $http ) {

        this.drawCard = function ( deckId , count ) {
            var url = "http://deckofcardsapi.com/api/deck/"+deckId+"/draw/?count="+count;

            var deferred = $q.defer();

            $http.get(url).
                success(function (data, status, headers, config) {
                    console.log( data.cards );
                    deferred.resolve( data.cards );

                }).
                error(function (data, status, headers, config) {
                    deferred.reject();
                    console.log("could not retrieve card");
                });
            return deferred.promise;
        };
  });

'use strict';

/**
 * @ngdoc function
 * @name angularjsTrainingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsTrainingApp
 */
angular.module('angularjsTrainingApp')
  .controller('MainCtrl', function ( $scope,  DecksProvider , CardsProvider ) {

        $scope.deck = {};

        $scope.getDeck = function() {
            DecksProvider.getDeck().then(function (deck) {
                $scope.deck = deck;
            });
        };

        $scope.drawCards = function()
        {
            if($scope.deck.deck_id) {
                CardsProvider.drawCard( $scope.deck.deck_id , $scope.cardsCount ).then(function (cards) {
                    $scope.cards = cards;
                })
            }
            else
            {
                alert("deck is not loaded yet");
            }
        };

        function init()
        {
            $scope.getDeck();
        }

        init();
  });

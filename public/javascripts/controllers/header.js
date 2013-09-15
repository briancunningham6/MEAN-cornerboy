/**
 * Created with JetBrains PhpStorm.
 * User: user
 * Date: 15/09/2013
 * Time: 15:21
 * To change this template use File | Settings | File Templates.
 */
window.angular.module('cornerboy.controllers.header', [])
    .controller('HeaderController', ['$scope', 'Global',
        function ($scope, Global) {
            $scope.global = Global;

            $scope.navbarEntries = [
                {
                    "title": "Leagues",
                    "link": "leagues"
                },
                {
                    "title": "Fantasy Teams",
                    "link": "fantasyteams"
                },
                {
                    "title": "NFL Teams",
                    "link": "nflteams"
                },
                {
                    "title": "Players",
                    "link": "players"
                }
            ];
        }]);
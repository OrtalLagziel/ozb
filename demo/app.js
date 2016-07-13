var app = angular.module('App', [
  'ozbm'
]);

app.controller('BaseCtrl', function($scope) {
  'use strict';

  $scope.myName = 'Scott';
});

define([], function() {
  "use strict";

  var create = function(config) {
    return function($scope) {
      $scope.testName = config.test;
    };
  };

  return {
    create: create
  };
});
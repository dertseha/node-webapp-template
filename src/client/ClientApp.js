define(["module", "angular"], function(module, angular) {
  "use strict";

  var config = module.config();

  var appModule = angular.module("ClientApp", []);

  appModule.controller("TestController", ["$scope", function($scope) {
    $scope.testName = config.test;
  }]);

  return [appModule.name];
});
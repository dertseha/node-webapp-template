
define('TestController',[], function() {
  

  var create = function(config) {
    return function($scope) {
      $scope.testName = config.test;
    };
  };

  return {
    create: create
  };
});
define('ClientApp',["module", "angular", "TestController"], function(module, angular, testController) {
  

  var config = module.config();

  var appModule = angular.module("ClientApp", []);

  appModule.controller("TestController", ["$scope", testController.create(config)]);

  return [appModule.name];
});
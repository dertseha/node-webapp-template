
define('ClientApp',["module", "angular"], function(module, angular) {
  

  var config = module.config();

  var appModule = angular.module("ClientApp", []);

  appModule.controller("TestController", ["$scope", function($scope) {
    $scope.testName = config.test;
  }]);

  return [appModule.name];
});
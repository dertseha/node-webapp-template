(function(e){if("function"==typeof bootstrap)bootstrap("app",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeApp=e}else"undefined"!=typeof window?window.app=e():global.app=e()})(function(){var define,ses,bootstrap,module,exports;
return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * The main controller
 *
 * @module Client
 * @class MainController
 */

function MainController($scope, config) {
  $scope.testName = config.test;
}

MainController.controllerName = "MainController";

/**
 * Builds a controller function
 *
 * @method build
 * @param config {Object} the configuration to use
 * @return {Function} Controller function
 */
var build = function(config) {
  return function($scope) {
    return new MainController($scope, config);
  };
};

var register = function(module, config) {
  module.controller(MainController.controllerName, ["$scope", build(config)]);
};

var controller = {
  Constructor: MainController,
  register: register
};

module.exports = controller;

},{}],2:[function(require,module,exports){
"use strict";

var mainController = require("./MainController");

function setup(angular, config) {
  var appModule = angular.module("ClientApp", []);

  mainController.register(appModule, config);

  return [appModule.name];
}

module.exports = {
  setup: setup
};

},{"./MainController":1}]},{},[2])(2)
});
;
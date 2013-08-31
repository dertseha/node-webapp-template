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

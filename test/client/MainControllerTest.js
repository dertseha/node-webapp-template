/* global describe, it, global */
"use strict";
var expect = require("expect.js");

var controller = require(global.resolveSource("client/MainController.js"));


describe("MainController", function() {

  it("should have a register method", function() {
    expect(controller.register).to.be.a("function");
  });

  it("should reference config value", function() {
    var scope = {};
    var testValue = 1;
    var config = {
      test: testValue
    };
    var instance = new controller.Constructor(scope, config);

    expect(scope.testName).to.be.equal(testValue);
  });
});

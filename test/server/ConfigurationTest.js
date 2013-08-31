/* global describe, it, global */
"use strict";
var expect = require("expect.js");

var config = require(global.resolveSource("server/Configuration.js"));

describe("Configuration", function() {

  describe("http", function() {
    it("should have default port 3000", function() {
      var http = config.get("http");

      expect(http.port).to.be.equal(3000);
    });
  });
});

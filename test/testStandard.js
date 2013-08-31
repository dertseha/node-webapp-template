/* global global, __dirname */
"use strict";

var path = require("path");

var testSourceBase = path.resolve(path.join(__dirname, "..", "src"));

global.resolveSource = function(file) {
  return path.join(testSourceBase, file);
};

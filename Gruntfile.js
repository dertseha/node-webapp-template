"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    jshint: {
      options: {
        jshintrc: "./.jshintrc"
      },
      all: ["Gruntfile.js", "src/**/*.js", "test/**/*.js"]
    },

    plato: {
      src: {
        options: {
          jshint: grunt.file.readJSON("./.jshintrc")
        },
        files: {
          "reports/plato": ["src/**/*.js"]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-plato");

  grunt.registerTask("default", ["jshint", "plato"]);
  grunt.registerTask("test", ["jshint"]);
};
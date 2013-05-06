"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Run JSHint on all sources, excluding the generated or imported client scripts
    jshint: {
      options: {
        jshintrc: "./.jshintrc"
      },
      all: ["Gruntfile.js", "src/**/*.js", "test/**/*.js", "!src/server/WebServer/public/javascripts/**/*.js"]
    },

    // Run Plato (static analysis) on server and client sources
    plato: {
      src: {
        options: {
          jshint: grunt.file.readJSON("./.jshintrc")
        },
        files: {
          "build/reports/plato": ["src/**/*.js", "!src/server/WebServer/public/javascripts/**/*.js"]
        }
      }
    },

    // Combine the client sources into one file, minify as second task
    requirejs: {
      compile: {
        options: {
          baseUrl: "src/client",

          modules: [{
            name: "ClientApp",
            exclude: ["angular"]
          }],
          dir: "build/client/full",

          optimize: "none"
        }
      },
      minify: {
        options: {
          baseUrl: "src/client",

          modules: [{
            name: "ClientApp",
            exclude: ["angular"]
          }],
          dir: "build/client/min",

          optimize: "uglify2"
        }
      }
    },

    // Copy the combined client sources to public server directories
    copy: {
      client: {
        files: [{
          src: "build/client/full/ClientApp.js",
          dest: "src/server/WebServer/public/javascripts/full/client/ClientApp.js"
        }, {
          src: "build/client/min/ClientApp.js",
          dest: "src/server/WebServer/public/javascripts/min/client/ClientApp.js"
        }]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-plato");

  grunt.registerTask("default", ["jshint", "plato", "requirejs:compile", "requirejs:minify", "copy"]);
  grunt.registerTask("test", ["jshint"]);
};
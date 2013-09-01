/* global __dirname */
"use strict";
var path = require("path");

module.exports = function(grunt) {
  var jsFiles = ["Gruntfile.js", "src/client/**/*.js", "src/server/**/*.js", "test/**/*.js"];

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Run JSHint on all sources
    jshint: {
      options: {
        jshintrc: "./.jshintrc"
      },
      all: jsFiles
    },

    // JSBeautifier on all sources
    jsbeautifier: {
      standard: {
        src: jsFiles,
        options: {
          js: grunt.file.readJSON(".jsbeautifyrc")
        }
      }
    },

    // browserify for packing all commonjs files
    browserify: {
      client: {
        src: ["src/client/index.js"],
        dest: "src/wwwroot/javascripts/full/client/client.js",
        options: {
          standalone: "app"
        }
      }
    },

    // uglify for compression
    uglify: {
      lib: {
        files: {
          "src/wwwroot/javascripts/min/client/client.js": ["src/wwwroot/javascripts/full/client/client.js"]
        },
        options: {
          mangle: {
            except: ["$scope"]
          }
        }
      }
    },

    // Run tests using mocha
    mochaTest: {
      clientRaw: {
        options: {
          require: ["./test/testStandard.js"],
          reporter: "spec"
        },
        src: ["test/client/**/*Test.js"]
      },
      server: {
        options: {
          require: ["./test/testStandard.js"],
          reporter: "spec"
        },
        src: ["test/server/**/*Test.js"]
      },
      coverage: {
        options: {
          require: ["./test/testCoverage.js"],
          reporter: "min"
        },
        src: ["test/**/*Test.js"]
      }
    },

    // documentation
    yuidoc: {
      client: {
        name: "<%= pkg.name %> - Client",
        description: "<%= pkg.description %>",
        version: "<%= pkg.version %>",
        url: "da homepage <%= pkg.homepage %>",
        options: {
          paths: ["src/client/"],
          outdir: "build/doc/client/"
        }
      },
      server: {
        name: "<%= pkg.name %> - Server",
        description: "<%= pkg.description %>",
        version: "<%= pkg.version %>",
        url: "da homepage <%= pkg.homepage %>",
        options: {
          paths: ["src/server/"],
          outdir: "build/doc/server/"
        }
      }
    },

    // tasks for coverage analysis (istanbul)
    instrument: {
      files: ["src/client/**/*.js", "src/server/**/*.js"],
      options: {
        basePath: "build/instrumented/"
      }
    },
    storeCoverage: {
      options: {
        dir: "build/reports/coverage/"
      }
    },
    makeReport: {
      src: "build/reports/coverage/**/*.json",
      options: {
        type: "lcov",
        dir: "build/reports/coverage/",
        print: "text-summary" // detail, none
      }
    }
  });

  grunt.loadNpmTasks("grunt-jsbeautifier");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-yuidoc");
  grunt.loadNpmTasks("grunt-istanbul");
  grunt.loadNpmTasks("grunt-mocha-test");

  grunt.registerTask("lint", ["jshint", "jsbeautifier"]);
  grunt.registerTask("test", ["mochaTest:clientRaw", "mochaTest:server"]);
  grunt.registerTask("compile", ["browserify", "uglify"]);

  grunt.registerTask("coverage", ["instrument", "mochaTest:coverage", "storeCoverage", "makeReport"]);
  grunt.registerTask("doc", ["yuidoc"]);

  grunt.registerTask("ci", ["jshint", "test", "compile", "coverage"]);
  grunt.registerTask("default", ["lint", "test", "compile"]);
};

[![Build Status](https://secure.travis-ci.org/dertseha/node-webapp-template.png?branch=master)](http://travis-ci.org/dertseha/node-webapp-template)

This project is a template for a node.js application serving a web application.

It contains the basic setup for a build chain using grunt.

## Usage
* Check-out and copy the project to the new one
* Search for all occurrences of "node-webapp-template" and replace with proper name
** LICENSE, package.json, ...
* Modify generic descriptions
** README.md, package.json, ...
* Set up Travis-CI

## Grunt tasks
* lint: running jshint (.jshintrc) and jsbeautifier (.jsbeautifyrc)
* test: running mocha on server and client tests
* compile: browserify on all client sources, uglify for minification
* coverage: runs a silent test using istanbul for coverage.
* doc: YUIdoc on all sources

The default task runs lint, test and compile in that order.


## License

The project is available under the terms of the [New BSD License](LICENSE).

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

## Quirks and Hacks in the setup
### BusterJs
grunt-buster uses a direct dependency on github to use the new (unreleased) 2.0 version which allows multiple tasks.
Although buster-configuration (the one in the indirect dependencies) has a problem with explicit (relative) configuration files,
with the new grunt-buster plugin it is possible to specify separate tasks with each setting the config group to run.

## License

The project is available under the terms of the [New BSD License](LICENSE).

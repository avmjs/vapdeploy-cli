#!/usr/bin/env node
'use strict';
const meow = require('meow');
const deployer = require('vapdeploy');
const writeBuildFile = require('./utils/build');

// throw abstraction for more control
const throwError = function(error) {
  throw `vapdeploy-cli ERROR [${(new Date()).toISOString()}]: ${String(error)}`;
};

// log abstraction for more control
const log = function() {
  const args = Array.prototype.slice.call(arguments);

  // output console log
  console.log.apply(console.log, [`vapdeploy-cli [${(new Date()).toISOString()}]: `].concat(args));
};

// the cli
const cli = meow(`
    Usage
      $ vapdeploy <config-path> <output-dir-path> [options]

    Example
      $ vapdeploy  ./vapdeploy.config.js  ./
`);

// the config input module and the output path
const configInput = require(cli.input[0]);
const outputPath = cli.input[1];

// run deployer
deployer(configInput, function(deployerError, deployerResult) {
  if (deployerError) {
    log(`Error during contract deployment!`);
    throwError(deployerError);
  } else {
    // build environments file
    writeBuildFile(deployerResult, outputPath);
  }
});

'use strict';

const resolve = require('path').resolve;

const DIR_CLIENT = 'client';
const DIR_SERVER = 'server';
const DIR_MOBILE = 'mobile';

const DIR_DIST = 'dist';
const DIR_CONFIG = 'configs';
const DIR_MODULES = 'node_modules';

const PROJECT_PATH = resolve(__dirname, '../');

function inProject() {
  return resolve.apply(resolve, [PROJECT_PATH].concat(Array.from(arguments)));
}

// ------------------------------------
// Configuration Definition
// ------------------------------------
module.exports = exports = {
  // path helpers
  DIR_CONFIG: DIR_CONFIG,
  DIR_MODULES: DIR_MODULES,
  inProject,
  inConfigs: inProject.bind(undefined, DIR_CONFIG),
  inDist: inProject.bind(undefined, DIR_DIST),
  inClient: inProject.bind(undefined, DIR_CLIENT),
  inServer: inProject.bind(undefined, DIR_SERVER),
  inMobile: inProject.bind(undefined, DIR_MOBILE)
};

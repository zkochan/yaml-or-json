'use strict';

var fs = require('fs');
var yaml = require('js-yaml');

var opts = {
  encoding: 'utf8'
};

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, opts);
  } catch(e) {
    return undefined;
  }
}

function yamlOrJSON(path) {
  var content = readFile(path + '.yaml');

  if (typeof content !== 'undefined') {
    return yaml.safeLoad(content);
  }

  content = readFile(path + '.yml');

  if (typeof content !== 'undefined') {
    return yaml.safeLoad(content);
  }

  return require(path + '.json');
}

module.exports = yamlOrJSON;

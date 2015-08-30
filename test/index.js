'use strict';

var expect = require('chai').expect;
var yamlOrJSON = require('../');

describe('yaml-or-json', function() {
  it('should parse .yaml file', function() {
    var config = yamlOrJSON(__dirname + '/configs/yaml');
    expect(config.foo).to.eq('bar');
  });

  it('should parse .yml file', function() {
    var config = yamlOrJSON(__dirname + '/configs/yml');
    expect(config.foo).to.eq('bar');
  });

  it('should parse .json file', function() {
    var config = yamlOrJSON(__dirname + '/configs/json');
    expect(config.foo).to.eq('bar');
  });

  it('should throw error if no config file found', function() {
    expect(function() {
      var config = yamlOrJSON(__dirname + '/configs/no-file');
    }).to.throw();
  });
});

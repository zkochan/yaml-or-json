# yaml-or-json

Requires a yaml or json config file depending on what it finds.

[![Dependency Status](https://david-dm.org/zkochan/yaml-or-json/status.svg?style=flat)](https://david-dm.org/zkochan/yaml-or-json)
[![Build Status](http://img.shields.io/travis/zkochan/yaml-or-json.svg?style=flat)](https://travis-ci.org/zkochan/yaml-or-json)
[![npm version](https://badge.fury.io/js/yaml-or-json.svg)](http://badge.fury.io/js/yaml-or-json)


## Installation

```
npm install --save yaml-or-json
```


## Usage

```js
var yamlOrJSON = require('yaml-or-json');

var config = yamlOrJSON(__dirname + '/config/my-config');
console.log(config.someProperty);
```

This will read and parse `my-config.yaml` or `my-config.yml` or `my-config.json` from the config
directory, depending which file will be there.


## JSON5 is supported!

JSON files are parsed by [JSON5 parser](https://www.npmjs.com/package/json5).


## License

MIT © [Zoltan Kochan](https://www.kochan.io)

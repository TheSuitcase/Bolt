'use strict';

var _main = require('../main');

var _main2 = _interopRequireDefault(_main);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set state modes.
var tasks = {
  'state:setmode:development': function stateSetmodeDevelopment(bolt, paths, state) {
    state.mode = 'development';
  },

  'state:setmode:production': function stateSetmodeProduction(bolt, paths, state) {
    state.mode = 'production';
  },

  // Empty the output directory.
  'clean:dist': function cleanDist(bolt, paths, state) {
    if (paths.input === paths.output) {
      return;
    }
    _fsExtra2.default.emptyDirSync(paths.output);
  }
};

_main2.default.task(tasks);
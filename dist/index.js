'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

var _instance = require('./instance');

var _instance2 = _interopRequireDefault(_instance);

var _default = require('./tasks/default.tasks');

var _default2 = _interopRequireDefault(_default);

var _styles = require('./tasks/styles.tasks');

var _styles2 = _interopRequireDefault(_styles);

var _javascript = require('./tasks/javascript.tasks');

var _javascript2 = _interopRequireDefault(_javascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bolt = Object.assign(_instance2.default, _main2.default);

exports.default = Bolt;

module.exports = Bolt;
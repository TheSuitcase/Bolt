'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cli = {
  delimiter: [_chalk2.default.gray('['), _chalk2.default.yellow('Bolt'), _chalk2.default.gray(']')].join(''),

  items: function items() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (_util2.default.isArray(args[0])) {
      args = args[0];
    }

    args = args.map(function (arg) {
      return _chalk2.default.gray(arg);
    });

    return args.join(', ');
  },
  write: function write() {
    var _this = this;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args = args.map(function (line) {
      return _this.delimiter + ' ' + line;
    });

    console.log(args.join('\n'));
  },
  error: function error(file, line, character) {
    var text = [_chalk2.default.gray('['), _chalk2.default.red('Error'), _chalk2.default.gray(']'), _chalk2.default.gray('['), _chalk2.default.white(file), ':', _chalk2.default.red(line), ':', _chalk2.default.red(character), _chalk2.default.gray(']')].join('');

    console.log(text);
  },
  checkboxes: function checkboxes() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return _inquirer2.default.prompt({
      type: 'checkbox',
      message: options.message,
      name: options.name,
      choices: options.choices
    });
  }
};

exports.default = Cli;
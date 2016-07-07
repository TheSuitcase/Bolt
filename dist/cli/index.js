#!/usr/bin/env node
'use strict';

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _thesuitcasePyramid = require('thesuitcase-pyramid');

var _thesuitcasePyramid2 = _interopRequireDefault(_thesuitcasePyramid);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Load the bolt file.
require(process.env.PWD + '/bolt.js');

var instances = Object.keys(_index2.default.instances);

// General setup.
_thesuitcasePyramid2.default
// .overflow((args) => {
//   console.log('I catched your request: ', args)
// })
.version(_package2.default.version);

_thesuitcasePyramid2.default.command('run').required('instance', 'The name of your Bolt instance.').optional('task', 'The name of the task you want to run.').option(['-n', '--new'], 'Create a new Bolt process!')

// Features.
// .password()
// .checkbox('Pick a process', ['option 1', 'option 2'])
// .list('Pick a process', ['option 1', 'option 2'])
.confirm('Are you sure?').input('Enter your username: ').action(function (cli, feature, answer) {
  if (feature.type === 'confirm') {
    cli.checkbox('Pick a process', ['option 1', 'option 2']);
    _thesuitcasePyramid2.default.log("We don't like your answer!");
  }
  // console.log('Action:', args); // , feature.type, answer)
});

_thesuitcasePyramid2.default.delimiter([_chalk2.default.gray('['), _chalk2.default.yellow('Bolt'), _chalk2.default.gray(']')].join(''));

_thesuitcasePyramid2.default.parse();

// Object based command.
// Pyramid
//   .command('run', {
//     required: [
//       {instance: 'The name of your Bolt instance'}
//     ],
//     optional: {
//       task: 'The name of you Bolt instance.'
//     },
//     options: {
//       '-n --new', 'Create a new Bolt process'
//     },
//   })
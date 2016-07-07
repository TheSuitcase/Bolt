'use strict';

var _main = require('../main');

var _main2 = _interopRequireDefault(_main);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gulpSass = require('gulp-sass');

var _gulpSass2 = _interopRequireDefault(_gulpSass);

var _gulpCssnano = require('gulp-cssnano');

var _gulpCssnano2 = _interopRequireDefault(_gulpCssnano);

var _gulpFlatten = require('gulp-flatten');

var _gulpFlatten2 = _interopRequireDefault(_gulpFlatten);

var _gulpRename = require('gulp-rename');

var _gulpRename2 = _interopRequireDefault(_gulpRename);

var _gulpAutoprefixer = require('gulp-autoprefixer');

var _gulpAutoprefixer2 = _interopRequireDefault(_gulpAutoprefixer);

var _gulpHeader = require('gulp-header');

var _gulpHeader2 = _interopRequireDefault(_gulpHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Load package

// Styles.
var Package = require(process.env.PWD + '/package.json');

// Empty the output directory.
_main2.default.task('javascript:build', function (bolt, paths, state) {
  var stream = bolt.src(_path2.default.join(paths.input, paths.styles.input) + '/**/*.js');
  var taskState = state.styles[state.mode];

  stream = stream.pipe(bolt.dest(_path2.default.join(paths.output, paths.styles.output)));

  return stream;
});
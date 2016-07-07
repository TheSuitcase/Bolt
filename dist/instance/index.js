'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _main = require('../main');

var _main2 = _interopRequireDefault(_main);

var _defaultState = require('./default-state');

var _defaultState2 = _interopRequireDefault(_defaultState);

var _defaultPaths = require('./default-paths');

var _defaultPaths2 = _interopRequireDefault(_defaultPaths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var instances = {};

var Bolt = (function (_Gulp$Gulp) {
  _inherits(Bolt, _Gulp$Gulp);

  function Bolt(name) {
    var paths = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var state = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    _classCallCheck(this, Bolt);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bolt).call(this));

    _this.name = name;
    _this.state = Object.assign({}, _defaultState2.default, state);
    _this.paths = Object.assign({}, _defaultPaths2.default, paths);

    _main2.default.registerInstance(_this);

    _this.setTasks();
    return _this;
  }

  _createClass(Bolt, [{
    key: 'setTasks',
    value: function setTasks() {
      var _this2 = this;

      var all = Object.keys(_main2.default.defaultTasks);

      this.tasks = Object.assign({}, _main2.default.defaultTasks);

      // Update scopes to this instance.
      all.forEach(function (task) {
        _this2.tasks[task].fn = _main2.default.defaultTasks[task].fn.bind(null, _this2, _this2.paths, _this2.state);
      });

      this.task('default', this.state[this.state.mode]);
    }
  }, {
    key: 'run',
    value: function run(task) {
      if (task === 'default' || task === undefined) {
        this.start();
      } else {
        this.task(task);
      }
    }
  }]);

  return Bolt;
})(_gulp2.default.Gulp);

exports.default = Bolt;
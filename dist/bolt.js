'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var _paths = require('./paths');

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var tasks = {};

var setTask = function setTask(name, dep, fn) {
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    Object.keys(name).forEach(function (item) {
      setTask(item, [], name[item]);
    });
    return;
  }

  if (typeof dep === 'function') {
    fn = dep;
    dep = [];
  }

  tasks[name] = {
    fn: fn, dep: dep, name: name };
};

var Bolt = (function (_Gulp$Gulp) {
  _inherits(Bolt, _Gulp$Gulp);

  _createClass(Bolt, [{
    key: 'task',
    value: function task() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _get(Object.getPrototypeOf(Bolt.prototype), 'task', this).apply(this, args);
    }
  }], [{
    key: 'task',
    value: function task() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      setTask.apply(null, args);
    }
  }]);

  function Bolt() {
    var paths = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var state = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Bolt);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bolt).call(this));

    _this.state = Object.assign({}, _state2.default, state);
    _this.paths = Object.assign({}, _paths2.default, paths);

    _this.setTasks();

    _this.run();
    return _this;
  }

  _createClass(Bolt, [{
    key: 'setTasks',
    value: function setTasks() {
      var _this2 = this;

      var all = Object.keys(tasks);

      this.tasks = Object.assign({}, tasks);

      // Update scopes to this instance.
      all.forEach(function (task) {
        _this2.tasks[task].fn = tasks[task].fn.bind(null, _this2, _this2.paths, _this2.state);
      });
    }
  }, {
    key: 'run',
    value: function run() {
      this.task('default', this.state[this.state.mode]);
      this.start();
    }
  }]);

  return Bolt;
})(_gulp2.default.Gulp);

exports.default = Bolt;
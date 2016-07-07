'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var Main = {
  instances: {},
  defaultTasks: {},

  task: function task(name, dep, fn) {
    if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
      Object.keys(name).forEach(function (item) {
        Main.task(item, [], name[item]);
      });
      return;
    }

    if (typeof dep === 'function') {
      fn = dep;
      dep = [];
    }

    Main.defaultTasks[name] = {
      fn: fn, dep: dep, name: name };
  },
  run: function run(instance, task) {
    if (!Main.instances[instance]) {
      return false;
    }
    return Main.instances.task(task);
  },
  registerInstance: function registerInstance(instance) {
    this.instances[instance.name] = instance;
  }
};

exports.default = Main;
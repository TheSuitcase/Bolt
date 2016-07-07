"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Command = (function () {
  function Command(commandString) {
    _classCallCheck(this, Command);

    this.commandString = commandString;

    this.command = undefined;
    this.required = [];
    this.optional = [];

    this.callbacks = {};

    this.parseCommandString(commandString);
  }

  _createClass(Command, [{
    key: "parseCommandString",
    value: function parseCommandString(string) {
      var results = string.match(/([a-z]+)\s?(\<([a-z]+)\>)?\s?(\[([a-z]+)\])?/);
      this.command = results[1];

      if (results[3]) {
        this.required.push(results[3]);
      }

      if (results[5]) {
        this.required.push(results[5]);
      }
    }
  }, {
    key: "action",
    value: function action(cb) {
      this.callbacks.action = cb;
    }
  }, {
    key: "missingArgument",
    value: function missingArgument(cb) {
      this.callbacks.missingArgument = cb;
    }
  }, {
    key: "checkbox",
    value: function checkbox(choices) {
      this.checkbox = choices;
    }
  }]);

  return Command;
})();

exports.default = Command;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContext = createContext;
exports.compileFunction = compileFunction;
exports.runInContext = _runInContext;
exports.Script = exports.runInNewContext = void 0;

var _main = require("./interpreter/main");

// TODO:
// add tests
function createContext(ctx) {
  if (ctx === void 0) {
    ctx = Object.create(null);
  }

  return ctx;
}

function compileFunction(code, params, options) {
  if (params === void 0) {
    params = [];
  }

  if (options === void 0) {
    options = {};
  }

  var ctx = options.parsingContext;
  var timeout = options.timeout === undefined ? 0 : options.timeout;
  var wrapCode = "\n    (function anonymous(" + params.join(",") + "){\n         " + code + "\n    });\n    ";
  var interpreter = new _main.Interpreter(ctx, {
    ecmaVersion: options.ecmaVersion,
    timeout: timeout,
    rootContext: options.rootContext,
    globalContextInFunction: options.globalContextInFunction
  });
  return interpreter.evaluate(wrapCode);
}

function _runInContext(code, ctx, options) {
  var interpreter = new _main.Interpreter(ctx, options);
  return interpreter.evaluate(code);
}

var runInNewContext = _runInContext;
exports.runInNewContext = runInNewContext;

var Script =
/*#__PURE__*/
function () {
  function Script(code) {
    this._code = code;
  }

  var _proto = Script.prototype;

  _proto.runInContext = function runInContext(ctx) {
    return _runInContext(this._code, ctx);
  };

  _proto.runInNewContext = function runInNewContext(ctx) {
    return _runInContext(this._code, ctx);
  };

  return Script;
}();

exports.Script = Script;
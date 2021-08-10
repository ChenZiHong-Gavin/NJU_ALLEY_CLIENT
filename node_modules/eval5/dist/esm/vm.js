import { Interpreter } from "./interpreter/main"; // TODO:
// add tests

export function createContext(ctx) {
  if (ctx === void 0) {
    ctx = Object.create(null);
  }

  return ctx;
}
export function compileFunction(code, params, options) {
  if (params === void 0) {
    params = [];
  }

  if (options === void 0) {
    options = {};
  }

  var ctx = options.parsingContext;
  var timeout = options.timeout === undefined ? 0 : options.timeout;
  var wrapCode = "\n    (function anonymous(" + params.join(",") + "){\n         " + code + "\n    });\n    ";
  var interpreter = new Interpreter(ctx, {
    ecmaVersion: options.ecmaVersion,
    timeout: timeout,
    rootContext: options.rootContext,
    globalContextInFunction: options.globalContextInFunction
  });
  return interpreter.evaluate(wrapCode);
}

function _runInContext(code, ctx, options) {
  var interpreter = new Interpreter(ctx, options);
  return interpreter.evaluate(code);
}

export { _runInContext as runInContext };
export var runInNewContext = _runInContext;
export var Script =
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
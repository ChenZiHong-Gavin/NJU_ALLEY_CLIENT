"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Interpreter", {
  enumerable: true,
  get: function get() {
    return _main.Interpreter;
  }
});
Object.defineProperty(exports, "evaluate", {
  enumerable: true,
  get: function get() {
    return _evaluate.default;
  }
});
Object.defineProperty(exports, "Function", {
  enumerable: true,
  get: function get() {
    return _Function.default;
  }
});
exports.vm = exports.default = void 0;

var _main = require("./interpreter/main");

var vm = _interopRequireWildcard(require("./vm"));

exports.vm = vm;

var _evaluate = _interopRequireDefault(require("./evaluate"));

var _Function = _interopRequireDefault(require("./Function"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = _evaluate.default;
exports.default = _default;
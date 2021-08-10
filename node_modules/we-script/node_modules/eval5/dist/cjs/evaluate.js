"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vm = require("./vm");

var _default = function _default(code, ctx, options) {
  return (0, _vm.runInContext)(code, ctx, options);
};

exports.default = _default;
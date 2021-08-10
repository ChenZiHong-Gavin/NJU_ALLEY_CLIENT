"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = exports.InterruptThrowReferenceError = exports.InterruptThrowSyntaxError = exports.InterruptThrowError = exports.ThrowTypeError = exports.ThrowReferenceError = exports.ThrowSyntaxError = exports.ThrowError = void 0;

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ThrowError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(ThrowError, _Error);

  function ThrowError() {
    return _Error.apply(this, arguments) || this;
  }

  return ThrowError;
}(_wrapNativeSuper(Error));

exports.ThrowError = ThrowError;

var ThrowSyntaxError =
/*#__PURE__*/
function (_SyntaxError) {
  _inheritsLoose(ThrowSyntaxError, _SyntaxError);

  function ThrowSyntaxError() {
    return _SyntaxError.apply(this, arguments) || this;
  }

  return ThrowSyntaxError;
}(_wrapNativeSuper(SyntaxError));

exports.ThrowSyntaxError = ThrowSyntaxError;

var ThrowReferenceError =
/*#__PURE__*/
function (_ReferenceError) {
  _inheritsLoose(ThrowReferenceError, _ReferenceError);

  function ThrowReferenceError() {
    return _ReferenceError.apply(this, arguments) || this;
  }

  return ThrowReferenceError;
}(_wrapNativeSuper(ReferenceError));

exports.ThrowReferenceError = ThrowReferenceError;

var ThrowTypeError =
/*#__PURE__*/
function (_TypeError) {
  _inheritsLoose(ThrowTypeError, _TypeError);

  function ThrowTypeError() {
    return _TypeError.apply(this, arguments) || this;
  }

  return ThrowTypeError;
}(_wrapNativeSuper(TypeError));

exports.ThrowTypeError = ThrowTypeError;

var InterruptThrowError =
/*#__PURE__*/
function (_ThrowError) {
  _inheritsLoose(InterruptThrowError, _ThrowError);

  function InterruptThrowError() {
    return _ThrowError.apply(this, arguments) || this;
  }

  return InterruptThrowError;
}(ThrowError);

exports.InterruptThrowError = InterruptThrowError;

var InterruptThrowSyntaxError =
/*#__PURE__*/
function (_ThrowSyntaxError) {
  _inheritsLoose(InterruptThrowSyntaxError, _ThrowSyntaxError);

  function InterruptThrowSyntaxError() {
    return _ThrowSyntaxError.apply(this, arguments) || this;
  }

  return InterruptThrowSyntaxError;
}(ThrowSyntaxError);

exports.InterruptThrowSyntaxError = InterruptThrowSyntaxError;

var InterruptThrowReferenceError =
/*#__PURE__*/
function (_ThrowReferenceError) {
  _inheritsLoose(InterruptThrowReferenceError, _ThrowReferenceError);

  function InterruptThrowReferenceError() {
    return _ThrowReferenceError.apply(this, arguments) || this;
  }

  return InterruptThrowReferenceError;
}(ThrowReferenceError);

exports.InterruptThrowReferenceError = InterruptThrowReferenceError;
var Messages = {
  UnknownError: [3001, "%0", InterruptThrowError],
  ExecutionTimeOutError: [3002, "Script execution timed out after %0ms", InterruptThrowError],
  NodeTypeSyntaxError: [1001, "Unknown node type: %0", InterruptThrowReferenceError],
  BinaryOperatorSyntaxError: [1002, "Unknown binary operator: %0", InterruptThrowReferenceError],
  LogicalOperatorSyntaxError: [1003, "Unknown logical operator: %0", InterruptThrowReferenceError],
  UnaryOperatorSyntaxError: [1004, "Unknown unary operator: %0", InterruptThrowReferenceError],
  UpdateOperatorSyntaxError: [1005, "Unknown update operator: %0", InterruptThrowReferenceError],
  ObjectStructureSyntaxError: [1006, "Unknown object structure: %0", InterruptThrowReferenceError],
  AssignmentExpressionSyntaxError: [1007, "Unknown assignment expression: %0", InterruptThrowReferenceError],
  VariableTypeSyntaxError: [1008, "Unknown variable type: %0", InterruptThrowReferenceError],
  ParamTypeSyntaxError: [1009, "Unknown param type: %0", InterruptThrowReferenceError],
  AssignmentTypeSyntaxError: [1010, "Unknown assignment type: %0", InterruptThrowReferenceError],
  FunctionUndefinedReferenceError: [2001, "%0 is not a function", ThrowReferenceError],
  VariableUndefinedReferenceError: [2002, "%0 is not defined", ThrowReferenceError],
  IsNotConstructor: [2003, "%0 is not a constructor", ThrowTypeError]
};
exports.Messages = Messages;
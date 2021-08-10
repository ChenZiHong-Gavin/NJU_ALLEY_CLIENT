import { compileFunction } from "./vm";
export default function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var code = args.pop();
  return compileFunction(code || "", args);
}
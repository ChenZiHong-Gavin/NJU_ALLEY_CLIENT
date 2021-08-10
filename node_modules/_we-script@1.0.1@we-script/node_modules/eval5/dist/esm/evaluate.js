import { runInContext } from "./vm";
export default (function (code, ctx, options) {
  return runInContext(code, ctx, options);
});
import { runInContext } from "./vm";
export default (code, ctx, options) => {
    return runInContext(code, ctx, options);
};

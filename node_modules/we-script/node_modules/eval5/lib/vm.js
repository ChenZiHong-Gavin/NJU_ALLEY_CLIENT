import { Interpreter } from "./interpreter/main";
// TODO:
// add tests
export function createContext(ctx = Object.create(null)) {
    return ctx;
}
export function compileFunction(code, params = [], options = {}) {
    const ctx = options.parsingContext;
    const timeout = options.timeout === undefined ? 0 : options.timeout;
    const wrapCode = `
    (function anonymous(${params.join(",")}){
         ${code}
    });
    `;
    const interpreter = new Interpreter(ctx, {
        ecmaVersion: options.ecmaVersion,
        timeout,
        rootContext: options.rootContext,
        globalContextInFunction: options.globalContextInFunction,
    });
    return interpreter.evaluate(wrapCode);
}
export function runInContext(code, ctx, options) {
    const interpreter = new Interpreter(ctx, options);
    return interpreter.evaluate(code);
}
export const runInNewContext = runInContext;
export class Script {
    constructor(code) {
        this._code = code;
    }
    runInContext(ctx) {
        return runInContext(this._code, ctx);
    }
    runInNewContext(ctx) {
        return runInContext(this._code, ctx);
    }
}

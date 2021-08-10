import { VMContext, CompileOptions, ScriptOptions } from "./types";
export declare function createContext(ctx?: VMContext): VMContext;
export declare function compileFunction(code: string, params?: string[], options?: CompileOptions): (...args: string[]) => any;
export declare function runInContext(code: string, ctx?: VMContext, options?: ScriptOptions): any;
export declare const runInNewContext: typeof runInContext;
export declare class Script {
    _code: string;
    constructor(code: string);
    runInContext(ctx: VMContext): any;
    runInNewContext(ctx?: VMContext): any;
}

import { MessageItem } from "./messages";
import { Node, ESTree } from "./nodes";
declare type Getter = () => any;
interface BaseClosure {
    (pNode?: Node): any;
    isFunctionDeclareClosure?: boolean;
}
declare type CaseItem = {
    testClosure: BaseClosure;
    bodyClosure: BaseClosure;
};
declare type SwitchCaseClosure = () => CaseItem;
declare type ReturnStringClosure = () => string;
declare type ECMA_VERSION = 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020;
interface Options {
    ecmaVersion?: ECMA_VERSION;
    timeout?: number;
    rootContext?: Context | null;
    globalContextInFunction?: any;
    _initEnv?: (this: Interpreter) => void;
}
interface CollectDeclarations {
    [key: string]: undefined | BaseClosure;
}
declare type ScopeData = {
    [prop: string]: any;
    [prop: number]: any;
};
declare type Context = {
    [prop: string]: any;
    [prop: number]: any;
};
interface GeneratorReflection {
    getOptions(): Readonly<Options>;
    getCurrentScope(): Scope;
    getGlobalScope(): Scope;
    getCurrentContext(): Context;
    getExecStartTime(): number;
}
declare class InternalInterpreterReflection {
    protected interpreter: Interpreter;
    constructor(interpreter: Interpreter);
    generator(): GeneratorReflection;
}
declare function internalEval(reflection: InternalInterpreterReflection, code?: string, useGlobalScope?: boolean): any;
declare function internalFunction(reflection: InternalInterpreterReflection, ...params: string[]): (...args: any[]) => any;
/**
 * scope chain
 *
 * superScope
 *     ↓
 * rootScope
 *     ↓
 * globalScope
 *     ↓
 * functionScope
 *
 */
declare class Scope {
    readonly name: string | undefined | Symbol;
    readonly parent: Scope | null;
    readonly data: ScopeData;
    labelStack: string[];
    constructor(data: ScopeData, parent?: Scope | null, name?: string | Symbol);
}
export declare class Interpreter {
    static readonly version: string;
    static readonly eval: typeof internalEval;
    static readonly Function: typeof internalFunction;
    static ecmaVersion: ECMA_VERSION;
    static globalContextInFunction: any;
    static global: Context;
    protected value: any;
    protected context: Context | Scope;
    protected globalContext: Context;
    protected source: string;
    protected sourceList: string[];
    protected currentScope: Scope;
    protected globalScope: Scope;
    protected currentContext: Context;
    protected options: Options;
    protected callStack: string[];
    protected collectDeclVars: CollectDeclarations;
    protected collectDeclFuncs: CollectDeclarations;
    protected isVarDeclMode: boolean;
    protected lastExecNode: Node | null;
    protected isRunning: boolean;
    protected execStartTime: number;
    protected execEndTime: number;
    constructor(context?: Context | Scope, options?: Options);
    protected initEnvironment(ctx: Context | Scope): void;
    getExecStartTime(): number;
    getExecutionTime(): number;
    setExecTimeout(timeout?: number): void;
    getOptions(): Readonly<Options>;
    protected getGlobalScope(): Scope;
    protected getCurrentScope(): Scope;
    protected getCurrentContext(): Context;
    protected isInterruptThrow<T>(err: T): boolean;
    protected createSuperScope(ctx: Context): Scope;
    protected setCurrentContext(ctx: Context): void;
    protected setCurrentScope(scope: Scope): void;
    evaluate(code?: string): any;
    appendCode(code: string): any;
    protected evaluateNode(node: ESTree.Program, source?: string): any;
    protected createErrorMessage(msg: MessageItem, value: string | number, node?: Node | null): string;
    protected createError<T>(message: string, error: {
        new (msg: string): T;
    }): T;
    protected createThrowError<T>(message: string, error: {
        new (msg: string): T;
    }): T;
    protected createInternalThrowError<T extends MessageItem>(msg: T, value: string | number, node?: Node | null): Error;
    protected checkTimeout(): boolean;
    protected getNodePosition(node: (Node & {
        start?: number;
        end?: number;
    }) | null): string;
    protected createClosure(node: Node): BaseClosure;
    protected binaryExpressionHandler(node: ESTree.BinaryExpression): BaseClosure;
    protected logicalExpressionHandler(node: ESTree.LogicalExpression): BaseClosure;
    protected unaryExpressionHandler(node: ESTree.UnaryExpression): BaseClosure;
    protected updateExpressionHandler(node: ESTree.UpdateExpression): BaseClosure;
    protected objectExpressionHandler(node: ESTree.ObjectExpression): () => {};
    protected arrayExpressionHandler(node: ESTree.ArrayExpression): () => any[];
    protected safeObjectGet(obj: any, key: any, node: Node): any;
    protected createCallFunctionGetter(node: Node & {
        start?: number;
        end?: number;
    }): () => any;
    protected callExpressionHandler(node: ESTree.CallExpression): BaseClosure;
    protected functionExpressionHandler(node: (ESTree.FunctionExpression & {
        start?: number;
        end?: number;
    }) | (ESTree.FunctionDeclaration & {
        start?: number;
        end?: number;
    })): BaseClosure;
    protected newExpressionHandler(node: ESTree.NewExpression): BaseClosure;
    protected memberExpressionHandler(node: ESTree.MemberExpression): BaseClosure;
    protected thisExpressionHandler(node: ESTree.ThisExpression): BaseClosure;
    protected sequenceExpressionHandler(node: ESTree.SequenceExpression): BaseClosure;
    protected literalHandler(node: ESTree.Literal & {
        regex?: {
            pattern: string;
            flags: string;
        };
    }): BaseClosure;
    protected identifierHandler(node: ESTree.Identifier): BaseClosure;
    protected getIdentifierScope(node: ESTree.Identifier): Scope;
    protected assignmentExpressionHandler(node: ESTree.AssignmentExpression): BaseClosure;
    protected functionDeclarationHandler(node: ESTree.FunctionDeclaration): BaseClosure;
    protected getVariableName(node: ESTree.Pattern): never | string;
    protected variableDeclarationHandler(node: ESTree.VariableDeclaration): BaseClosure;
    protected assertVariable(data: ScopeData, name: string, node: Node): void | never;
    protected programHandler(node: ESTree.Program | ESTree.BlockStatement): BaseClosure;
    protected expressionStatementHandler(node: ESTree.ExpressionStatement): BaseClosure;
    protected emptyStatementHandler(node: Node): BaseClosure;
    protected returnStatementHandler(node: ESTree.ReturnStatement): BaseClosure;
    protected ifStatementHandler(node: ESTree.IfStatement | ESTree.ConditionalExpression): BaseClosure;
    protected conditionalExpressionHandler(node: ESTree.ConditionalExpression): BaseClosure;
    protected forStatementHandler(node: ESTree.ForStatement | ESTree.WhileStatement | ESTree.DoWhileStatement): BaseClosure;
    protected whileStatementHandler(node: ESTree.WhileStatement): BaseClosure;
    protected doWhileStatementHandler(node: ESTree.DoWhileStatement): BaseClosure;
    protected forInStatementHandler(node: ESTree.ForInStatement): BaseClosure;
    protected withStatementHandler(node: ESTree.WithStatement): BaseClosure;
    protected throwStatementHandler(node: ESTree.ThrowStatement): BaseClosure;
    protected tryStatementHandler(node: ESTree.TryStatement): BaseClosure;
    protected catchClauseHandler(node: ESTree.CatchClause): (e: Error) => any;
    protected continueStatementHandler(node: ESTree.ContinueStatement): BaseClosure;
    protected breakStatementHandler(node: ESTree.BreakStatement): BaseClosure;
    protected switchStatementHandler(node: ESTree.SwitchStatement): BaseClosure;
    protected switchCaseHandler(node: ESTree.SwitchCase): SwitchCaseClosure;
    protected labeledStatementHandler(node: ESTree.LabeledStatement): BaseClosure;
    protected debuggerStatementHandler(node: ESTree.DebuggerStatement): BaseClosure;
    protected createParamNameGetter(node: ESTree.Pattern): ReturnStringClosure;
    protected createObjectKeyGetter(node: ESTree.Expression): Getter;
    protected createMemberKeyGetter(node: ESTree.MemberExpression): Getter;
    protected createObjectGetter(node: ESTree.Expression | ESTree.Pattern): Getter;
    protected createNameGetter(node: ESTree.Expression | ESTree.Pattern): Getter;
    protected varDeclaration(name: string): void;
    protected funcDeclaration(name: string, func: () => any): void;
    protected addDeclarationsToScope(declVars: CollectDeclarations, declFuncs: CollectDeclarations, scope: Scope): void;
    protected getScopeValue(name: string, startScope: Scope): any;
    protected getScopeDataFromName(name: string, startScope: Scope): ScopeData;
    protected getScopeFromName(name: string, startScope: Scope): Scope;
    protected setValue(value: any): any;
    getValue(): any;
}
export {};

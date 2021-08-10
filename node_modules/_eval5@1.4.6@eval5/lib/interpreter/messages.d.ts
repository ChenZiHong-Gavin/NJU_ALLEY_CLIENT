export declare class ThrowError extends Error {
}
export declare class ThrowSyntaxError extends SyntaxError {
}
export declare class ThrowReferenceError extends ReferenceError {
}
export declare class ThrowTypeError extends TypeError {
}
export declare class InterruptThrowError extends ThrowError {
}
export declare class InterruptThrowSyntaxError extends ThrowSyntaxError {
}
export declare class InterruptThrowReferenceError extends ThrowReferenceError {
}
interface Messages {
    [type: string]: MessageItem;
}
export declare type MessageItem = [number, string, new (message: string) => Error];
export declare const Messages: Messages;
export {};

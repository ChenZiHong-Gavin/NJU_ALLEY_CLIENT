import { compileFunction } from "./vm";
export default function (...args) {
    const code = args.pop();
    return compileFunction(code || "", args);
}

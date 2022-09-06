import { tryRequire } from './tryRequire.cjs';

export function doStuff() {
    const foo = tryRequire('typescript');
    console.log(foo);
}
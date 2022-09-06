# ts-repro-cjs
Reproing the cjs bug. Run `yarn` to install, and then `yarn build`. 

### Expected

`./lib/tryRequire.cjs` does not have `export {}` at the end of the output.

### Resulted

```js
module.exports = {
    tryRequire: function (modulePath) {
        return require(modulePath);
    },
};
export {};
//# sourceMappingURL=tryRequire.cjs.map
```

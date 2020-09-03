## Modules

But eventually scripts became more and more complex, so the community invented a variety of ways to organize code into modules, special libraries to load modules on demand.

- [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition) – one of the most ancient module systems, initially implemented by the library [require.js](http://requirejs.org/).
- [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1) – the module system created for Node.js server.
- [UMD](https://github.com/umdjs/umd) – one more module system, suggested as a universal one, compatible with AMD and CommonJS.

Modules work only via HTTP(s), not in local files

Compatibility, "nomodule": old browsers do not understand `type="module"`, Scripts of unknown type are just ignored.

Build tools do the following:

* Take a "main" module, the one intended to be put in `<script type="module">` in HTML.
* Analyze its dependencoes: imports and then imports of imports etc
* Build a single file with all modules, replacing native `import` calls with bundler functions, so that it works. “Special” module types like HTML/CSS modules are also supported.
* In the process, other transformations and optimizations may be applied:
  * Unreachable code removed.
  * Unused exports removed (“tree-shaking”).
  * Development-specific statements like `console` and `debugger` removed.
  * Modern, bleeding-edge JavaScript syntax may be transformed to older one with similar functionality using [Babel](https://babeljs.io/).
  * The resulting file is minified (spaces removed, variables replaced with shorter names, etc).

Webpack bundlers: 

```html
<!-- Assuming we got bundle.js from a tool like Webpack --> 
<script src="bundle.js"></script>
```



Export:

There may be only one export default per file. And then import it without curly braces



Named exports force us to use exactly the right name to import, while for a default export, we always choose the name when importing


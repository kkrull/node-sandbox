# Node.js modules

Learn how to make a Node module and use it in another script.

- `greeter-client`: A Node package that uses `greeter-lib`, with various ways of requiring the
  module and [running the code](#running).
- `greeter-lib`: A Node [module](https://docs.npmjs.com/about-packages-and-modules) used by other
  parts of this project.

## binstubs

`greeter-cli/` has a package with a `bin` section, so it installs links to its main script(s) when
you `npm link` it.

```sh
# greeter-cli/
$ npm link
added 1 package, and audited 3 packages in 267ms

$ which greeter-cli
/:home/.nvm/versions/node/v18.20.7/bin/greeter-cli

# anywhere else using that same node.js
$ greeter-cli
Hello World!
```

## Linking

The module and dependencies upon it are
[linked](https://docs.npmjs.com/cli/v10/commands/npm-link#description), so that the package does not
have to be published to the NPM registry and installed elsewhere.

This process is not automated, at least not in this project.  Using a workspace would streamline the
process, while also scoping links to the workspace instead of installing them globally.

Start by adding a link in the global namespace, for the package itself:

```sh
# greeter-lib/
npm link
```

Then add a link from the package that depends upon it:

```sh
# greeter-client/
npm link @kkrull/greeter-lib@0.0.1 [--save]
```

At this point, `require-package-name.js` should work in [all of its forms](#running).

```sh
$ node require-package-name.js
Hello World!

$ npm run main:require-package-name

> greeter-client@0.0.1 main:require-package-name
> node require-package-name.js

Hello World!

$ ./require-package-name.js
Hello World!
```

## `package.json`

- [`bin`](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) is either a string or an
  object of names to scripts, to be installed in `node_modules` (which may also be part of the
  system path).
- [`main`](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#main) is the entry point that
  is used when another package `require`s it.  So it defaults to `index.js`, and it's looking for a
  file containing `module.exports = ...`.

## Running

### via `node`

```sh
$ node require-directory.js
Hello World!
```

### via `npm run`

```sh
$ npm run main:require-directory

> greeter-client@0.0.1 main:require-directory
> node require-directory.js

Hello World!
```

### via shebang

```sh
$ ./require-directory.js
Hello World!
```

## Scope

The package is [scoped](https://docs.npmjs.com/cli/v10/using-npm/scope), to avoid any pain if I
mistakenly try to `npm publish` it.

## References

- <https://docs.npmjs.com/creating-node-js-modules>

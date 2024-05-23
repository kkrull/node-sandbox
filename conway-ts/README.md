# CodeRetreat Base Project: Typescript

The project is set up to be run as a node script.

- Run as a script: `npm start`
- Compile and run:
  * compile to dist: `npm run build`
  * run: `node dist/index.js`


## Requirements

* [Node.js 14.17+](https://nodejs.org/en/)
* npm 6.14+ (bundled with node.js)

You'll know that you have what you need if you can get output like the
following:

```shell
$ node --version
v14.17.3
$ npm --version
6.14.13
```


### Node.js via direnv (MacOS)

Globally:

1. Install [`direnv`](https://direnv.net/)
1. Install `nvm`, possibly via a zsh plugin:
   https://github.com/nvm-sh/nvm#installing-and-updating
1. Install node.js: `nvm install --lts v14.17.3`

In this repository:

1. `npm install`
2. `npm run env:init`, then edit `.envrc` with the values configured in
   SalesForce (see below)
3. `npm run ...` (see below)


## Development

1. Install dependencies (once): `npm install`
2. Run a script (as needed):
   * `npm run` - list available scripts to run
   * `npm run test` - run tests
   * `npm start` - run as a script that outputs to the terminal


### Testing with mocha and chai

Tests use [mocha](https://mochajs.org/) as the runner and
[chai](https://www.chaijs.com/) for assertions.

List of available assertions:
[https://www.chaijs.com/api/bdd/](https://www.chaijs.com/api/bdd/)

To run tests: `npm run test`.

# Node.js Sandbox

I started a new project based on Node.js and had to learn a lot of new libraries.
This repository attempts to learn them one at a time, or to touch upon a single integration point between two libraries at a time.

Most examples are taken straight from that library's tutorials; there's not a whole lot of original content.
But there's nothing quite like writing the code myself and making it dance.

Most of the projects have some mechanism for exercising it, short of opening a web page in a browser.  
Try `npm test` in each directory to see what the example is doing, and then look at the code.  
It is - by design - focused only on learning one thing, so there's not much source code in each example.

## Development environment

Note to future self: If for some reason this doesn't work on your latest machine, it was developed on OSX with node v6.6.0.

```
$ brew info node
node: stable 6.6.0 (bottled), HEAD
Platform built on the V8 JavaScript runtime to build network applications
https://nodejs.org/
/usr/local/Cellar/node/6.6.0 (3,669 files, 40.9M) *
  Poured from bottle on 2016-09-16 at 09:46:38
From: https://github.com/Homebrew/homebrew-core/blob/master/Formula/node.rb
==> Dependencies
Build: xz ✘, pkg-config ✘
Optional: openssl ✔
==> Options
--with-debug
        Build with debugger hooks
--with-full-icu
        Build with full-icu (all locales) instead of small-icu (English only)
--with-openssl
        Build against Homebrew's OpenSSL instead of the bundled OpenSSL
--without-completion
        npm bash completion will not be installed
--without-npm
        npm will not be installed
--HEAD
        Install HEAD version
==> Caveats
Please note by default only English locale support is provided. If you need
full locale support you should either rebuild with full icu:
  `brew reinstall node --with-full-icu`
or add full icu data at runtime following:
  https://github.com/nodejs/node/wiki/Intl#using-and-customizing-the-small-icu-build

Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
```

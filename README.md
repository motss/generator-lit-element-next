<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">generator-lit-element-next</h1>

  <p>Generator for developing your next custom element with latest LitElement in TypeScript</p>
</div>

<hr />

<a href="https://www.buymeacoffee.com/RLmMhgXFb" target="_blank" rel="noopener noreferrer"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 20px !important;width: auto !important;" ></a>
[![tippin.me][tippin-me-badge]][tippin-me-url]
[![Follow me][follow-me-badge]][follow-me-url]

[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]
[![Mentioned in Awesome][awesome-badge]][awesome-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]

[![ci][ga-badge]][ga-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![codecov][codecov-badge]][codecov-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[![codebeat badge][codebeat-badge]][codebeat-url]
[![Codacy Badge][codacy-badge]][codacy-url]
[![Code of Conduct][coc-badge]][coc-url]

> Write your next custom element with latest [lit-element][lit-element-url] in [TypeScript][typescript-url].

## Table of contents <!-- omit in toc -->

- [Pre-requisites](#pre-requisites)
- [Installation](#installation)
  - [NPM](#npm)
  - [NPX](#npx)
- [Testing](#testing)
- [Getting To Know Yeoman](#getting-to-know-yeoman)
- [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
- [License](#license)

## Pre-requisites

Please make sure that you have the following dependencies installed and setup correctly:-

- [Node.js][nodejs-url] >= `10.18.1`
- [NPM][npm-url] >= `6.13.4`

## Installation

### NPM

First, install `generator-lit-element-next` using [NPM][npm-url] (we assume you have pre-installed [Node.js][nodejs-url]).

```sh
# Install globally with NPM
$ npm install -g yo generator-lit-element-next
```

Then generate your new project:

```sh
# Create a new directory if you haven't already.
# Then change to that new directory.
$ mkdir my-app && cd my-app

# Init
$ yo lit-element-next
```

### NPX

[NPX][npx-url] comes in a package as of [Node.js][nodejs-url] `v8.9.0`. This means that you can run any CLI written in [Node.js][nodejs-url] without globally installing it.

```sh
# Create a new directory if you haven't already.
# Then change to that new directory.
$ mkdir my-app && cd my-app

# Install packages with NPX and execute the CLI with this one-liner
$ npx -p yo -p generator-lit-element-next -- yo lit-element-next
```

## Testing

No option on which testing library/ framework to use to test Web Components and you are feel free to bring your own testing library or framework. But, here are a few to recommend if you haven't already had one:

1. [@open-wc/testing]
2. [webdriverio]
3. [playwright]

## Getting To Know Yeoman

- Yeoman has a heart of gold.
- Yeoman is a person with feelings and opinions, but is very easy to work with.
- Yeoman can be too opinionated at times but is easily convinced not to be.
- Feel free to [learn more about Yeoman][yeoman-url].

## Contributing

### Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct][coc-url]. By participating in this project you agree to abide by its terms.

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng

<!-- References -->
[node-releases-url]: https://nodejs.org/en/download/releases
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[npx-url]: https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
[tslint-extension-url]: https://palantir.github.io/tslint/usage/third-party-tools
[tslint-url]: https://palantir.github.io/tslint
[typescript-url]: https://www.typescriptlang.org
[yeoman-url]: https://yeoman.io
[lit-element-url]: https://github.com/Polymer/lit-element
[@open-wc/testing]: https://github.com/open-wc/open-wc/tree/master/packages/testing
[webdriverio]: https://github.com/webdriverio/webdriverio
[playwright]: https://github.com/microsoft/playwright

<!-- Badges -->
[tippin-me-badge]: https://badgen.net/badge/%E2%9A%A1%EF%B8%8Ftippin.me/@igarshmyb/F0918E
[follow-me-badge]: https://flat.badgen.net/twitter/follow/igarshmyb?icon=twitter

[version-badge]: https://flat.badgen.net/npm/v/generator-lit-element-next?icon=npm
[node-version-badge]: https://flat.badgen.net/npm/node/generator-lit-element-next
[mit-license-badge]: https://flat.badgen.net/npm/license/generator-lit-element-next
[awesome-badge]: https://awesome.re/mentioned-badge.svg

[downloads-badge]: https://flat.badgen.net/npm/dm/generator-lit-element-next
[total-downloads-badge]: https://flat.badgen.net/npm/dt/generator-lit-element-next?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/generator-lit-element-next

[ga-badge]: https://github.com/motss/generator-lit-element-next/workflows/ci/badge.svg
[daviddm-badge]: https://flat.badgen.net/david/dep/motss/generator-lit-element-next
[codecov-badge]: https://flat.badgen.net/codecov/c/github/motss/generator-lit-element-next?label=codecov&icon=codecov
[coveralls-badge]: https://flat.badgen.net/coveralls/c/github/motss/generator-lit-element-next?label=coveralls

[codebeat-badge]: https://codebeat.co/badges/2e98378b-4e11-497e-a692-ba66a4d1c71a?style=flat-square
[codacy-badge]: https://api.codacy.com/project/badge/Grade/1ea482be29d14b848f5f8b34ca8e9dd9?style=flat-square
[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[tippin-me-url]: https://tippin.me/@igarshmyb
[follow-me-url]: https://twitter.com/igarshmyb?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/generator-lit-element-next

[version-url]: https://www.npmjs.com/package/generator-lit-element-next
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: /LICENSE
[awesome-url]: https://github.com/web-padawan/awesome-lit-html#starter-templates

[downloads-url]: https://www.npmtrends.com/generator-lit-element-next
[packagephobia-url]: https://packagephobia.now.sh/result?p=generator-lit-element-next

[ga-url]: https://github.com/motss/generator-lit-element-next/actions?query=workflow%3Aci
[daviddm-url]: https://david-dm.org/motss/generator-lit-element-next
[coveralls-url]: https://coveralls.io/github/motss/generator-lit-element-next?branch=master
[codecov-url]: https://codecov.io/gh/motss/generator-lit-element-next

[codebeat-url]: https://codebeat.co/projects/github-com-motss-generator-lit-element-next-master
[codacy-url]: https://www.codacy.com/app/motss/generator-lit-element-next?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/generator-lit-element-next&amp;utm_campaign=Badge_Grade
[coc-url]: /CODE-OF-CONDUCT.md

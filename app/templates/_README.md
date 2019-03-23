<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;"><%= packageName %></h1>

  <p><%= docDescription %></p>
</div>

<hr />

<!-- [![Follow me][follow-me-badge]][follow-me-url] -->

[![Version][version-badge]][version-url]
[![Built with lit-element][built-with-lit-element-badge]][built-with-lit-element-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

[![Build Status][travis-badge]][travis-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
<!-- [![codecov][codecov-badge]][codecov-url] -->
<!-- [![Coverage Status][coveralls-badge]][coveralls-url] -->

[![codebeat badge][codebeat-badge]][codebeat-url]
[![Codacy Badge][codacy-badge]][codacy-url]
[![Code of Conduct][coc-badge]][coc-url]

> Better element for the web

## Table of contents <!-- omit in toc -->

- [Pre-requisites](#pre-requisites)
- [Installation](#installation)
- [Usage](#usage)
  - [HTML (with native ES modules)](#html-with-native-es-modules)
  - [JS/ TS file (w/ native ES modules)](#js-ts-file-w-native-es-modules)
- [License](#license)

## Pre-requisites

- [Java 8][java-url] _(`web-component-tester` works without any issue with Java 8)_
- [Node.js][nodejs-url] >= 10.15.1
- [NPM][npm-url] >= 6.4.1 ([NPM][npm-url] comes with [Node.js][nodejs-url], no separate installation is required.)
- (Optional for non-[VS Code][vscode-url] users) [Syntax Highlighting for lit-html in VS Code][vscode-lit-html-url]
- [web-component-tester][web-component-tester-url] >= 6.9.2 (For running tests, it's recommended to install globally on your system due to its insanely huge install size by running `npm i -g web-component-tester`.)

## Installation

```sh
# Install via NPM
$ npm install <%= packageName %>
```

## Usage

### HTML (with native ES modules)

```html
<!-- For the sake of brevity, the HTML below is just for reference -->
<!doctype html>
<html>
  <head>
    <!-- Native ES modules -->
    <script type="module" src="/path/to/my-element.js"></script>
  </head>

  <body>
    <!-- Element declaration -->
    <my-element></my-element>
  </body>
</html>
```

### JS/ TS file (w/ native ES modules)

```ts
import { css, html, LitElement } from 'lit-element';
import '<%= packageName %>.js';

class MainApp extends LitElement {
  public static styles = [
    css`
    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }
    `,
  ];

  protected render() {
    return html`
    <my-element></my-element>
    `;
  }
}
```

## License

[MIT License](https://<%= gitName %>.mit-license.org/) © <%= authorName %>

<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[java-url]: https://www.java.com/en/download
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[vscode-url]: https://code.visualstudio.com
[vscode-lit-html-url]: https://github.com/mjbvz/vscode-lit-html
[web-component-tester-url]: https://github.com/Polymer/tools/tree/master/packages/web-component-tester

<!-- MDN -->
[array-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[regexp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[set-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

<!-- Badges -->
<!-- [follow-me-badge]: https://flat.badgen.net/twitter/follow/<%= authorName %>?icon=twitter -->



[version-badge]: https://flat.badgen.net/npm/v/<%= packageName %>?icon=npm
[built-with-lit-element-badge]: https://flat.badgen.net/npm/v/lit-element/latest?icon=npm&label=lit-element
[mit-license-badge]: https://flat.badgen.net/npm/license/<%= packageName %>

[downloads-badge]: https://flat.badgen.net/npm/dm/<%= packageName %>
[total-downloads-badge]: https://flat.badgen.net/npm/dt/<%= packageName %>?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/<%= packageName %>
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/<%= packageName %>

[travis-badge]: https://flat.badgen.net/travis/<%= gitName %>/<%= packageName %>?icon=travis
<!-- [circleci-badge]: https://flat.badgen.net/circleci/github/<%= gitName %>/<%= packageName %>?icon=circleci -->
[daviddm-badge]: https://flat.badgen.net/david/dep/<%= gitName %>/<%= packageName %>
<!-- [codecov-badge]: https://flat.badgen.net/codecov/c/github/<%= gitName %>/<%= packageName %>?label=codecov&icon=codecov -->
<!-- [coveralls-badge]: https://flat.badgen.net/coveralls/c/github/<%= gitName %>/<%= packageName %>?label=coveralls -->

[codebeat-badge]: https://codebeat.co/badges/123
[codacy-badge]: https://api.codacy.com/project/badge/Grade/123
[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
<!-- [follow-me-url]: https://twitter.com/<%= authorName %>?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=<%= packageName %> -->

[version-url]: https://www.npmjs.com/package/<%= packageName %>
[built-with-lit-element-url]: https://github.com/Polymer/lit-element
[mit-license-url]: https://github.com/<%= gitName %>/<%= packageName %>/blob/master/LICENSE

[downloads-url]: https://www.npmtrends.com/<%= packageName %>
[packagephobia-url]: https://packagephobia.now.sh/result?p=<%= packageName %>
[bundlephobia-url]: https://bundlephobia.com/result?p=<%= packageName %>

[travis-url]: https://travis-ci.org/<%= gitName %>/<%= packageName %>
<!-- [circleci-url]: https://circleci.com/gh/<%= gitName %>/<%= packageName %>/tree/master -->
[daviddm-url]: https://david-dm.org/<%= gitName %>/<%= packageName %>
<!-- [codecov-url]: https://codecov.io/gh/<%= gitName %>/<%= packageName %> -->
<!-- [coveralls-url]: https://coveralls.io/github/<%= gitName %>/<%= packageName %>?branch=master -->

[codebeat-url]: https://codebeat.co/projects/github-com-<%= gitName %>-<%= packageName %>-master
[codacy-url]: https://www.codacy.com/app/<%= gitName %>/<%= packageName %>?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=<%= gitName %>/<%= packageName %>&amp;utm_campaign=Badge_Grade
[coc-url]: https://github.com/<%= gitName %>/<%= packageName %>/blob/master/CODE_OF_CONDUCT.md

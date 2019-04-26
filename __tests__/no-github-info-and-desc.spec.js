jest.mock('gh-user', () => jest.fn().mockImplementation(() => {
  return Promise.reject({});
}));

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe(`Github info and 'docDescription' are missing`, () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .withPrompts({
        packageName: `${process.cwd().replace(/(?:.*\/)(.+)/i, '$1')}`,
        homepage: 'https://github.com/awesome-next',
        repoUrl: 'git@github.com:cashblack/awesome-next.git',
        authorName: 'Cash Black',
        authorEmail: 'cash.black@gmail.com',
        authorUrl: 'cash-black.com',
        gitName: 'cashblack',
      });
  });

  it('creates files', () => {
    const expected = [
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.npmrc',

      'CONTRIBUTORS',
      'LICENSE',
      'README.md',

      'tsconfig.json',
      'tsconfig.prod.json',
      'tslint.json',
      'tslint.prod.json',

      'package.json',
      'rollup.config.js',
      'wct.config.json',

      'src/test/index.html',
      'src/test/runner.html',
      'src/test/my-element.spec.ts',

      'src/my-element.ts',
    ];

    assert.file(expected);
  });
});

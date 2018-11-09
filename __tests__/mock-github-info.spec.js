jest.mock('shelljs', () => {
  return {
    which: () => true,
    exec: (cmd) => {
      return {
        stdout: cmd === 'git config --get user.email'
          ? 'cashblack.gmail.com'
          : 'Cash Black',
      };
    },
  };
});

jest.mock('github-username', () => jest.fn().mockImplementation(() => {
  return Promise.resolve('cashblack');
}));

jest.mock('gh-user', () => jest.fn().mockImplementation(() => {
  return Promise.resolve({
    html_url: 'https://github.com/cashblack',
  });
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
        description: 'Yet another generator to disrupt the world',
        homepage: 'https://github.com/awesome-lit-element-next',
        repoUrl: 'git@github.com:cashblack/awesome-lit-element-next.git',
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
      '.travis.yml',

      'CONTRIBUTORS',
      'LICENSE',
      'README.md',

      'tsconfig.test.json',
      'tsconfig.json',
      'tslint.json',
      'tslint.prod.json',

      'package.json',
      'rollup.config.js',
      'wct.conf.json',

      'src/test/index.html',
      'src/test/runner.html',
      'src/test/my-element.spec.ts',

      'src/my-element.ts',
    ];

    assert.file(expected);
  });
});

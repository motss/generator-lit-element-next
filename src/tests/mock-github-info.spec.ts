jest.mock('shelljs', () => {
  return {
    which: () => true,
    exec: (cmd: string) => {
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

import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

describe(`mock Github info`, () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '..'))
      .withPrompts({
        packageName: `${process.cwd().replace(/(?:.*\/)(.+)/i, '$1')}`,
        description: 'Yet another generator to disrupt the world',
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

      'LICENSE',
      'README.md',

      'tsconfig.json',
      'tsconfig.prod.json',
      'tslint.json',
      'tslint.prod.json',

      'package.json',
      'wct.config.json',

      'src/test/index.html',
      'src/test/runner.html',
      'src/test/my-element.spec.ts',

      'src/my-element.ts',
    ];

    assert.file(expected);
  });
});

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
  return Promise.reject();
}));

jest.mock('gh-user', () => jest.fn().mockImplementation(() => {
  return Promise.reject();
}));

import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

describe(`Github info and 'docDescription' are missing`, () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '..'))
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

      'LICENSE',
      'README.md',

      'tsconfig.json',
      'tsconfig.prod.json',
      'tslint.json',
      'tslint.prod.json',

      'package.json',

      'src/my-element.ts',
    ];

    assert.file(expected);
  });
});

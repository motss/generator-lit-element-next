const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const execa = require('execa');
const githubUsername = require('github-username');
const ghUser = require('gh-user');

function getDefault() {
  const getUserName = execa('git', ['config', '--get', 'user.name']);
  const getUserEmail = execa('git', ['config', '--get', 'user.email']);

  return Promise.all([getUserName.then((r) => r.stdout), getUserEmail.then((r) => r.stdout)])
    .then(([userName, userEmail]) => {
      return githubUsername(userEmail).then((username) => {
        return Promise.all([
          userName,
          userEmail,
          username,
          userEmail ? ghUser(username) : Promise.resolve({}),
        ]);
      });
    })
    .then(([name, email, userName, ghUser]) => {
      return {
        name,
        email,
        username: userName,
        homepage: ghUser.html_url,
      };
    });
}

module.exports = class extends Generator {
  initializing() {
    this.user = {};

    return getDefault()
      .then(({name, email, username, homepage} = {}) => {
        this.user.name = name || '';
        this.user.email = email || '';
        this.user.username = username || '';
        this.user.homepage = homepage || '';
      });
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the stunning ${chalk.red(process.env.npm_package_name)}!`));

    const fallbackDescription =
      'Developing your custom element with TypeScript and LitElement';
    const prompts = [
      {
        type: 'input',
        name: 'packageName',
        message: 'What would you like your project to be named?',
        default: () => {
          return process.cwd().replace(/(?:.*[/\\])([^/\\]+?)[/\\]*?$/gi, '$1');
        },
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description',
      },
      {
        type: 'input',
        name: 'homepage',
        message: 'Homepage URL',
      },
      {
        type: 'input',
        name: 'repoUrl',
        message: 'Link to the repository',
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'Author\'s Name',
        default: this.user.name,
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: 'Author\'s email',
        default: this.user.email,
      },
      {
        type: 'input',
        name: 'authorUrl',
        message: 'Author\'s homepage',
        default: this.user.homepage,
      },
      {
        type: 'input',
        name: 'gitName',
        message: 'Github username or organization',
        default: this.user.username,
      },
    ];

    return this.prompt(prompts).then((props) => {
      this.props = Object.assign({}, props, {
        docDescription: (props.description || fallbackDescription).replace(
          /typeScript/i,
          '[TypeScript][typescript-url]'
        ),
      });
    });
  }

  writing() {
    const NON_TPLS = [
      'src/my-element.ts',
      'src/test/my-element.spec.ts',
      'src/test/test-helpers.ts',
      'src/test/index.html',
      'src/test/runner.html',
      'CONTRIBUTORS',
      'tsconfig.test.json',
      'tsconfig.json',
      'tslint.json',
      'tslint.prod.json',
      'rollup.config.js',
      'wct.conf.json',
    ];
    const TPLS = [
      '_.editorconfig',
      '_.gitattributes',
      '_.gitignore',
      '_.npmrc',
      '_.travis.yml',
      '_LICENSE',
      '_package.json',
      '_README.md',
    ];

    NON_TPLS.map((n) => {
      return this.fs.copy(
        this.templatePath(n),
        this.destinationPath(n),
        this.props
      );
    });

    TPLS.map((n) => {
      return this.fs.copyTpl(
        this.templatePath(n),
        this.destinationPath(n.replace(/(_)/gi, '')),
        this.props
      );
    });
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: true,
      callback: () => {
        this.log(
          `✨  Your ${chalk.green(
            this.props.packageName
          )} is ready! Web Components rocks! 🤘`
        );
      },
    });
  }
};

# Squid Types

Squid types used on the data feed, pathfinder api and sdk.

### LINTER & PRETTIER

This project has [Prettier](https://prettier.io/docs/en/) and [ESLint](https://eslint.org/docs/latest/) linter rules installed. With [Husky](https://typicode.github.io/husky/) we ensure pre-commit and pre-push validation.

```bash
yarn lint
```

```bash
yarn lint:fix
```

```bash
yarn format
```

### VSCODE SETUP

Create a file `.vscode/settings.json` for auto-saving linter and prettier formatting. 

Add the following:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### RELEASE

NPM package publishing is automated with github actions. Follow these steps:

#### 1. Create a PR to the `develop` branch

- Update `version` inside `package.json` 
- Review, approve and merge.

#### 2. Create a PR from `develop` to `main` 

- Review, approve and merge

*As the PR from (2.) is merged, the commit to `main` will automatically trigger a release to NPM, please make sure you correctly update the version.*
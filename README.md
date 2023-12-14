# Squid Types

Squid types used on the graph, api and sdk.

### LINTER & PRETTIER

This project has installed prettier and linter rules, with husky we ensure pre-commit and pre-push validation.

```bash
yarn lint
```

```bash
yarn lint:fix
```

```bash
yarn format
```

### VSCODE

Create `.vscode/setting.json` for auto-saving linter and prettier format

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

# RELEASE

NPM package publish is automated with github actions, follow these steps:

1 - Create a PR to `develop` branch updating `package.json` version. (review, approve and merge)

2 - Create a PR from `develop` to `main`. (review, approve and merge)

Once the PR to `main` is merged, this commit on this branch gonna trigger automatically the release to NPM, please make sure you update correctly the version.

gatsby-template-project
==================

Usage
-----

This is a template for a gatsby react project. You can modify this to create, test, and deploy your own react clients

This template includes a basic client, cypress tests, a Dockerfile for building and running your client in docker, and a github actions file for testing/publishing the client in Github on push and release.

It is also set up to run Cypress snapshots though none are included in this template.

## Please make the following edits to adapt this project for your own:
Editing Package:
- Under `package.json`, update repository url and package name
- Under `client/package.json`, update package name
- Under `cypress/package.json`, update package name

Editing License:
- If you use a different license than the one provided, please edit the `LICENSE` and `LICENSE_HEADER`
- `LICENSE_HEADER` is a short version of your license that will go into the header of every javascript and typescript file
- If you would like to include the `LICENSE_HEADER` in different file types, please edit `license-ignore.txt`

Testing in Github Actions:
- Edit `DOCKER_IMAGE` in `.github/test-and-publish.yml` to be your project's git repo name and location
- In Github, go to your repository and visit Settings => Secrets
  - Add `DOCKER_LOGIN` and `DOCKER_PASSWORD` under repository secrets

Docker:
- Change `docker/Dockerfile` to use your project name instead of gatsby-template-project
- Change `docker/nginx/conf.d/default.conf` to use your project name instead of gatsby-template-project

Development
-----------

Any changes made to this repo should be covered by tests.

All pushed commits must pass format, lint, type, audit, and license checks. To check all required tests before a commit:

```
make test-all
```

To fix formatting issues:

```
make pretty
```

To add license headers:

```
make license
```

## Cypress Testing

To run cypress tests locally with UI you need two shells, first make sure the client is running locally:

```
cd client && make develop
```

...then you can run the full cypress test suite with

```
cd cypress && npm run cy:open
```

...then in the cypress browser window, click a spec to run it.

To run cypress tests headlessly in docker, you do **not** need the client running locally. Just run:

```
make test-e2e
```

If you make any changes to the client that need to be tested headlessly in docker, you must first rebuild the cypress and client:

```
make test-e2e-build
```

## Windows 10 Development

- Install git on the native windows side.
- Clone https://github.com/ictlearningsciences/gatsby-template-project to your machine.
- Install nvm for windows: https://dev.to/skaytech/how-to-install-node-version-manager-nvm-for-windows-10-4nbi
- Install node v14.x (latest LTS version) for the ictlearningsciences template project.
- Go to the client directory of the admin project and run npm install then npm develop.
- Go to the cypress directory of the admin project and run npm install then npm cy:open

Releases
--------

Currently, this image is semantically versioned. When making changes that you want to test in another project, create a branch and PR and then you can release a test tag one of two ways:

To build/push a pre-release semver tag of `gatsby-template-project` for the current commit in your branch

- ensure all github actions tests are passing
- create a [github release](https://github.com/ICTLearningSciences/gatsby-template-project/releases/new) with tag format `[0-9]+\.[0-9]+\.[0-9]+(-[a-z0-9.]*)?$` (e.g. `1.0.0-alpha.1`)
- ensure all github actions tests pass again and the docker `test and publish` action completes
- this will create a tag like `ictlearningsciences/gatsby-template-project:1.0.0-alpha.1`

Once your changes are approved and merged to `main`, you should create a release tag in semver format as follows:

- create a [github release](https://github.com/ICTLearningSciences/gatsby-template-project/releases/new) **from main** with tag format `[0-9]+\.[0-9]+\.[0-9]$` (e.g. `1.0.0`)
- ensure all github actions tests pass and the docker `test and publish` action completes
- this will create a tag like `ictlearningsciences/gatsby-template-project:1.0.0`

# gh-actions-tests
Experimenting with GitHub Actions

### What's happening

This changes the matrix of clients we run CI against depending on the branch and commit messages.

On `master`/`main` CI will run against all clients (defined by looking for a `customization/*.rb` file).

On a pull request CI will only run against the default client defined in [the Github workflow file](.github/workflows/ci.yml).

You can trigger a full CI run by including `ci full` in your commit message.

You can skip all CI by including `ci skip` in your commit message (this is a [Github default](https://github.blog/changelog/2021-02-08-github-actions-skip-pull-request-and-push-workflows-with-skip-ci/)).

### Things to try

- Add a client to `customization/*.rb`
- Open / update / close pull request
- Experiement with commit messages

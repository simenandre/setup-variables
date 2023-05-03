<a href="https://github.com/cobraz/setup-variables">
  <img alt="setup variables variable mapper github actions" src="https://raw.githubusercontent.com/cobraz/setup-variables/main/.github/assets/setup-variables.svg">
</a>

# Map variable with ease

```yaml
uses: simenandre/setup-variables@v2
id: stack
with:
  key: ${{ env.CI_REF_NAME_SLUG }}
  map: |
    main: prod
    staging: staging
    dev: dev
    '*': dev

```

## How does this compare to X?

There are multiple other Github Actions step that tries to solve similar/same
issues.

[variable-mapper](https://github.com/marketplace/actions/variable-mapper) for
instance, has mostly the same functionality as this. The schema design is mostly
the same, only difference being that the original uses JSON for mapping.

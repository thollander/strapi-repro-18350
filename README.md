# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## Repro for https://github.com/strapi/strapi/issues/18350

There is a dataset present in the root folder : `export_20240313210813.tar.gz`

You can import it through : `yarn strapi import -f ./export_20240313210813.tar.gz --force`

A warning should be logged : 

```
...
warn: Skipping link products.cross-selling:1 -> api::product.product:3 due to a foreign key constraint.
...
```

It's only a warning but there is actually an error as the product **Yellow shirt** is not in the `crossSelling` field of the `Homepage`. 

This error seems to happen when you have multiple components within the same collection. 

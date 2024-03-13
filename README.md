# Repro for https://github.com/strapi/strapi/issues/18350

There is a dataset present in the root folder : `export_20240313210813.tar.gz`

You can import it through : `yarn strapi import -f ./export_20240313210813.tar.gz --force`

If you run this command a first time with an empty database, it should work fine. 
You should see a **Yellow shirt** in the `crossSelling` field of the `Homepage` while running `yarn develop`. 

However, if you run it again, a warning will be logged : 

```
...
warn: Skipping link products.cross-selling:1 -> api::product.product:3 due to a foreign key constraint.
...
```

It's only a warning but there is actually an error as the product **Yellow shirt** as disappeared from the `crossSelling` field of the `Homepage`. 

This error seems to happen when you have multiple components within the same collection.

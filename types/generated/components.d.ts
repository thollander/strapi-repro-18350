import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductsBestSelling extends Schema.Component {
  collectionName: 'components_products_best_sellings';
  info: {
    displayName: 'bestSelling';
  };
  attributes: {
    label: Attribute.String;
    products: Attribute.Relation<
      'products.best-selling',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface ProductsCrossSelling extends Schema.Component {
  collectionName: 'components_products_cross_sellings';
  info: {
    displayName: 'crossSelling';
  };
  attributes: {
    label: Attribute.String;
    image: Attribute.String;
    products: Attribute.Relation<
      'products.cross-selling',
      'oneToMany',
      'api::product.product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'products.best-selling': ProductsBestSelling;
      'products.cross-selling': ProductsCrossSelling;
    }
  }
}

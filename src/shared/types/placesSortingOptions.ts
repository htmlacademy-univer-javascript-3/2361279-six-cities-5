import {Place} from './place.ts';

function popularComparer() {
  return 0;
}

function priceLowToHighComparer(p1: Place, p2: Place) {
  return p1.price - p2.price;
}

function priceHighToLowComparer(p1: Place, p2: Place) {
  return p2.price - p1.price;
}

function topRatedFirstComparer(p1: Place, p2: Place) {
  return p2.rating - p1.rating;
}

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'PriceLowToHigh',
  PriceHighToLow = 'PriceHighToLow',
  TopRatedFirst = 'TopRatedFirst'
}

export const sortComparers = new Map(
  [
    [SortType.Popular, popularComparer],
    [SortType.PriceLowToHigh, priceLowToHighComparer],
    [SortType.PriceHighToLow, priceHighToLowComparer],
    [SortType.TopRatedFirst, topRatedFirstComparer]
  ]
);

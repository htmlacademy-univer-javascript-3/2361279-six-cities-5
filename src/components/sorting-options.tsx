import {PlaceComparer} from './main.tsx';
import {Dispatch, SetStateAction} from 'react';
import {Place} from '../shared/types/place.ts';

export type SortingOptionsProps = {
  setComparer: Dispatch<SetStateAction<PlaceComparer>>;
};

function popularComparer() {
  return 0;
}

function priceLowToHigh(p1: Place, p2: Place) {
  return p1.price - p2.price;
}
function priceHighToLow(p1: Place, p2: Place) {
  return p2.price - p1.price;
}

function topRatedFirst(p1: Place, p2: Place) {
  return p2.rating - p1.rating;
}

export function SortingOptions(props: SortingOptionsProps) {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
                    popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li onClick={() => props.setComparer(() => popularComparer)} className="places__option places__option--active" tabIndex={0}>popular</li>
        <li onClick={() => props.setComparer(() => priceLowToHigh)} className="places__option" tabIndex={0}>Price: low to high</li>
        <li onClick={() => props.setComparer(() => priceHighToLow)} className="places__option" tabIndex={0}>Price: high to low</li>
        <li onClick={() => props.setComparer(() => topRatedFirst)} className="places__option" tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}

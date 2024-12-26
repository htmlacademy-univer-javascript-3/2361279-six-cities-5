import {PlaceComparer} from './main.tsx';
import {Dispatch, SetStateAction} from 'react';
import {SortType, sortComparers} from '../shared/types/placesSortingOptions.ts';
export type SortingOptionsProps = {
  setComparer: Dispatch<SetStateAction<PlaceComparer>>;
};

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
        <li onClick={() => props.setComparer(() => sortComparers.get(SortType.Popular) as PlaceComparer)} className="places__option places__option--active"
          tabIndex={0}
        >popular
        </li>
        <li onClick={() => props.setComparer(() => sortComparers.get(SortType.PriceLowToHigh) as PlaceComparer)} className="places__option"
          tabIndex={0}
        >Price: low to high
        </li>
        <li onClick={() => props.setComparer(() => sortComparers.get(SortType.PriceHighToLow) as PlaceComparer)} className="places__option"
          tabIndex={0}
        >Price: high to low
        </li>
        <li onClick={() => props.setComparer(() => sortComparers.get(SortType.TopRatedFirst) as PlaceComparer)} className="places__option" tabIndex={0}>Top
          rated first
        </li>
      </ul>
    </form>
  );
}

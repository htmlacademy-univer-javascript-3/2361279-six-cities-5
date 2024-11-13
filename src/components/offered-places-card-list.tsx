import {MouseEventHandler} from 'react';
import {OfferedPlaceCard} from './offered-place-card.tsx';
import {Place} from '../shared/types/place.ts';

export type OfferedPlacesCardListProps = {
  offeredPlaces: Place[];
  classes?: string;
  setActiveCard: (a: number) => void;
};

export function OfferedPlacesCardList(props: OfferedPlacesCardListProps) {
  return (
    <>
      {
        props.offeredPlaces.map((place, i) => {
          const handleMouseOver: MouseEventHandler = () => {
            props.setActiveCard(i);
          };

          return (
            <OfferedPlaceCard classes={props.classes} handleMouseOver={handleMouseOver} key={place.id}
              place={place}
            />);
        })
      }
    </>
  );
}

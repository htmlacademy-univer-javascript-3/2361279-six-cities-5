import {MouseEventHandler, useState} from 'react';
import {OfferedPlaceCard} from './offered-place-card.tsx';
import {Place} from '../shared/types/place.ts';

export type OfferedPlacesCardListProps = {
  offeredPlaces: Place[];
};

export function OfferedPlacesCardList(props: OfferedPlacesCardListProps) {
  const [, setActiveCard] = useState(null as (null | number));


  return (
    <>
      {
        props.offeredPlaces.map((place) => {
          const handleMouseOver: MouseEventHandler = () => {
            setActiveCard(place.id);
          };

          return (
            <OfferedPlaceCard handleMouseOver={handleMouseOver} key={place.id}
              place={place}
            />);
        })
      }
    </>
  );
}

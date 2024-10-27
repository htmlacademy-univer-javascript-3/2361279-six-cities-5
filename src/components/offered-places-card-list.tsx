import {useState} from 'react';
import {OfferedPlaceCard, Place} from './offered-place-card.tsx';

export type OfferedPlacesCardListProps = {
  offeredPlaces: Place[];
};

export function OfferedPlacesCardList(props: OfferedPlacesCardListProps) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      {
        props.offeredPlaces.map((place) => <OfferedPlaceCard key={place.id} place={place}/>)
      }
    </>
  );
}

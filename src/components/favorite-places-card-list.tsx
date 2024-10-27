import {useState} from 'react';
import {Place} from './offered-place-card.tsx';
import {FavoritePlaceCard} from './favorite-place-card.tsx';

export type FavoritePlacesCardListProps = {
  favoritePlaces: Place[];
};

export function FavoritePlacesCardList(props: FavoritePlacesCardListProps) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      {
        props.favoritePlaces.map((place) => <FavoritePlaceCard key={place.id} place={place}/>)
      }
    </>
  );
}

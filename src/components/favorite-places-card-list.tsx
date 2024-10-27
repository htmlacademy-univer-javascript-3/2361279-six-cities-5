import {FavoritePlaceCard} from './favorite-place-card.tsx';
import {Place} from '../shared/types/place.ts';

export type FavoritePlacesCardListProps = {
  favoritePlaces: Place[];
};

export function FavoritePlacesCardList(props: FavoritePlacesCardListProps) {
  return (
    <>
      {
        props.favoritePlaces.map((place) => <FavoritePlaceCard key={place.id} place={place}/>)
      }
    </>
  );
}

import {useState} from 'react';
import {PlaceCardProps} from './place_card.tsx';
import {FavoriteCard} from './favorite_card.tsx';

export type FavoriteListProps = {
  favoriteCards: PlaceCardProps[];
};

export function FavoriteList(props: FavoriteListProps) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      {
        props.favoriteCards.map((placeCard) => <FavoriteCard key={Math.trunc(Math.random() * Number.MAX_SAFE_INTEGER)} {...placeCard}/>)
      }
    </>
  );
}

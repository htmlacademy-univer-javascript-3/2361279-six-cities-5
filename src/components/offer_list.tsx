import {useState} from 'react';
import {PlaceCard, PlaceCardProps} from './place_card.tsx';

export type OfferListProps = {
  placeCards: PlaceCardProps[];
};

export function OfferList(props: OfferListProps) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      {
        props.placeCards.map((placeCard) => <PlaceCard key={placeCard.id} {...placeCard}/>)
      }
    </>
  );
}

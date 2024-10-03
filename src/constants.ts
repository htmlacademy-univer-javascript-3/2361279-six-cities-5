import {PlaceCardProps} from './components/place_card.tsx';

export enum PlaceType {
  Room = 'room',
  Apartment = 'apartment'
}

export const mockPlaceCards : PlaceCardProps[] = [
  {
    rating: 4, cardType: PlaceType.Apartment,
    description: 'beautiful & luxurious apartment at great location', price: 120,
    imageName: 'apartment-01.jpg'
  },
  {
    rating: 4, cardType: PlaceType.Room,
    description: 'wood and stone place', price: 80,
    imageName: 'room.jpg'
  },
  {
    rating: 4, cardType: PlaceType.Apartment,
    description: 'canal view prinsengracht', price: 132,
    imageName: 'apartment-02.jpg'
  },
  {
    rating: 5, cardType: PlaceType.Apartment,
    description: 'nice, cozy, warm big bed apartment', price: 180,
    imageName: 'apartment-03.jpg'
  },
  {
    rating: 4, cardType: PlaceType.Room,
    description: 'wood and stone place', price: 80,
    imageName: 'room.jpg'
  }
];

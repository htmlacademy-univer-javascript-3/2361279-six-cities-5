import {PlaceCardProps} from '../components/place_card.tsx';

export enum PlaceType {
  Room = 'room',
  Apartment = 'apartment'
}

export const mockPlaceCards: PlaceCardProps[] = [
  {
    id: 0,
    rating: 4, cardType: PlaceType.Apartment,
    name: 'beautiful & luxurious apartment at great location', price: 120,
    imageName: 'apartment-01.jpg'
  },
  {
    id: 1,
    rating: 4, cardType: PlaceType.Room,
    name: 'wood and stone place', price: 80,
    imageName: 'room.jpg'
  },
  {
    id: 2,
    rating: 4, cardType: PlaceType.Apartment,
    name: 'canal view prinsengracht', price: 132,
    imageName: 'apartment-02.jpg'
  },
  {
    id: 3,
    rating: 5, cardType: PlaceType.Apartment,
    name: 'nice, cozy, warm big bed apartment', price: 180,
    imageName: 'apartment-03.jpg'
  },
  {
    id: 4,
    rating: 4, cardType: PlaceType.Room,
    name: 'wood and stone place', price: 80,
    imageName: 'room.jpg'
  }
];

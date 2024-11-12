import {Place, PlaceType} from '../types/place.ts';

export const mockOfferPlaces: Place[] = [
  {
    id: 0,
    rating: 4, cardType: PlaceType.Apartment,
    name: 'Beautiful & luxurious apartment at great location', price: 120,
    imageName: 'apartment-01.jpg'
  },
  {
    id: 1,
    rating: 4, cardType: PlaceType.Room,
    name: 'Wood and stone place', price: 80,
    imageName: 'room.jpg'
  },
  {
    id: 2,
    rating: 4, cardType: PlaceType.Apartment,
    name: 'Canal view prinsengracht', price: 132,
    imageName: 'apartment-02.jpg'
  },
  {
    id: 3,
    rating: 5, cardType: PlaceType.Apartment,
    name: 'Nice, cozy, warm big bed apartment', price: 180,
    imageName: 'apartment-03.jpg'
  },
  {
    id: 4,
    rating: 4, cardType: PlaceType.Room,
    name: 'Wood and stone place', price: 80,
    imageName: 'room.jpg'
  }
];

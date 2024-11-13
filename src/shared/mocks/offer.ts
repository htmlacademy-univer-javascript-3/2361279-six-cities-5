import {Place, PlaceType} from '../types/place.ts';

export const mockOfferPlaces: Place[] = [
  {
    id: 0,
    rating: 4, cardType: PlaceType.Apartment,
    name: 'Beautiful & luxurious apartment at great location', price: 120,
    imageName: 'apartment-01.jpg',
    coordinates: {latitude: 52.3909553943508, longitude: 4.85309666406198}
  },
  {
    id: 1,
    rating: 4, cardType: PlaceType.Room,
    name: 'Wood and stone place', price: 80,
    imageName: 'room.jpg',
    coordinates: {latitude: 52.3609553943508, longitude: 4.85309666406198}
  },
  {
    id: 2,
    rating: 4, cardType: PlaceType.Apartment,
    name: 'Canal view prinsengracht', price: 132,
    imageName: 'apartment-02.jpg',
    coordinates: {latitude: 52.3909553943508, longitude: 4.929309666406198}
  },
  {
    id: 3,
    rating: 5, cardType: PlaceType.Apartment,
    name: 'Nice, cozy, warm big bed apartment', price: 180,
    imageName: 'apartment-03.jpg',
    coordinates: {latitude: 52.3809553943508, longitude: 4.939309666406198}
  },
  {
    id: 4,
    rating: 4, cardType: PlaceType.Room,
    name: 'Wood and stone place', price: 80,
    imageName: 'room.jpg',
    coordinates: {latitude: 52.4809553943508, longitude: 4.95}
  }
];

import {Place, PlaceType} from '../types/place.ts';
import {City} from '../types/city.ts';

export const mockOfferPlaces: Place[] = [
  {
    id: 0,
    city: City.Paris,
    rating: 4,
    cardType: PlaceType.Apartment,
    name: 'Beautiful & luxurious apartment at great location', price: 120,
    imageName: 'apartment-01.jpg',
    coordinates: {latitude: 52.3909553943508, longitude: 4.85309666406198}
  },
  {
    id: 1,
    city: City.Cologne,
    rating: 4,
    cardType: PlaceType.Room,
    name: 'Wood and stone place', price: 80,
    imageName: 'room.jpg',
    coordinates: {latitude: 52.3609553943508, longitude: 4.85309666406198}
  },
  {
    id: 2,
    city: City.Brussels,
    rating: 4,
    cardType: PlaceType.Apartment,
    name: 'Canal view prinsengracht', price: 132,
    imageName: 'apartment-02.jpg',
    coordinates: {latitude: 52.3909553943508, longitude: 4.929309666406198}
  },
  {
    id: 3,
    city: City.Amsterdam,
    rating: 5,
    cardType: PlaceType.Apartment,
    name: 'Nice, cozy, warm big bed apartment', price: 180,
    imageName: 'apartment-03.jpg',
    coordinates: {latitude: 52.3809553943508, longitude: 4.939309666406198}
  },
  {
    id: 4,
    city: City.Hamburg,
    rating: 4,
    cardType: PlaceType.Room,
    name: 'Wood and stone place', price: 80,
    imageName: 'room.jpg',
    coordinates: {latitude: 52.4809553943508, longitude: 4.95}
  },
  {
    id: 5,
    city: City.Dusseldorf,
    rating: 2,
    cardType: PlaceType.Apartment,
    name: 'Ex Serega living place', price: 30,
    imageName: 'studio-01.jpg',
    coordinates: {latitude: 52.4809553943508, longitude: 4.95}
  },

  {
    id: 6,
    city: City.Hamburg,
    rating: 5,
    cardType: PlaceType.Apartment,
    name: 'Хз не придумал', price: 228,
    imageName: 'room-small.jpg',
    coordinates: {latitude: 52.4509553943508, longitude: 4.9}
  },
];

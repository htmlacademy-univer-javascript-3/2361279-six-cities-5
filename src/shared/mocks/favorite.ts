import {Place, PlaceType} from '../types/place.ts';
import {City} from '../types/city.ts';

export const mockFavoritePlaces: Place[] = [
  {
    id: 0,
    rating: 5, cardType: PlaceType.Apartment,
    name: 'nice, cozy, warm big bed apartment', price: 180,
    imageName: 'apartment-03.jpg',
    coordinates: {latitude: 52.3909553943508, longitude: 4.85309666406198},
    city: City.Paris
  },
  {
    id: 1,
    rating: 4, cardType: PlaceType.Room,
    name: 'wood and stone place', price: 80,
    imageName: 'room.jpg',
    coordinates: {latitude: 52.3609553943508, longitude: 4.85309666406198},
    city: City.Dusseldorf,
  },
  {
    id: 2,
    rating: 5, cardType: PlaceType.Apartment,
    name: 'white castle', price: 180,
    imageName: 'apartment-small-04.jpg',
    coordinates: {latitude: 52.3909553943508, longitude: 4.929309666406198},
    city: City.Hamburg
  },
];

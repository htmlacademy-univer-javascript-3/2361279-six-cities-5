import {Place, PlaceType} from '../types/place.ts';

export const mockFavoritePlaces: Place[] = [
  {
    id: 0,
    rating: 5, cardType: PlaceType.Apartment,
    name: 'nice, cozy, warm big bed apartment', price: 180,
    imageName: 'apartment-03.jpg'
  },
  {
    id: 1,
    rating: 4, cardType: PlaceType.Room,
    name: 'wood and stone place', price: 80,
    imageName: 'room.jpg'
  },
  {
    id: 2,
    rating: 5, cardType: PlaceType.Apartment,
    name: 'white castle', price: 180,
    imageName: 'apartment-small-04.jpg'
  },
];

export enum PlaceType {
  Room = 'room',
  Apartment = 'apartment'
}

export type Coordinates = { latitude: number; longitude: number };

export type Place = {
  id: number;
  rating: number;
  cardType: PlaceType;
  name: string;
  price: number;
  imageName: string;
  coordinates: Coordinates;
}

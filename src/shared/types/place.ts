export enum PlaceType {
  Room = 'room',
  Apartment = 'apartment'
}

export type Place = {
  id: number;
  rating: number;
  cardType: PlaceType;
  name: string;
  price: number;
  imageName: string;
}

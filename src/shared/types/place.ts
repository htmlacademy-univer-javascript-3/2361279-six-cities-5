import {CityData} from './city.ts';

export enum PlaceType {
  Room = 'room',
  Apartment = 'apartment',
  House = 'house',
  Hotel = 'hotel'
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Place = {
  id: string;
  title: string;
  type: PlaceType;
  price: number;
  city: CityData;
  location: Location;
  isFavorite?: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

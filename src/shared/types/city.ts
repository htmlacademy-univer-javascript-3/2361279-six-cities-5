import {Coordinates} from './place.ts';

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export type CityData = {
  city: City;
  center: Coordinates;
  zoom: number;
};

const citiesArray: CityData[] =
  [
    {
      city: City.Paris,
      center: {
        latitude: 48.864716,
        longitude: 2.349014
      },
      zoom: 12
    },
    {
      city: City.Cologne,
      center: {
        latitude: 50.935173,
        longitude: 6.953101,
      },
      zoom: 12
    },
    {
      city: City.Brussels,
      center: {
        latitude: 50.85045,
        longitude: 4.34878
      },
      zoom: 12
    },
    {
      city: City.Amsterdam,
      center: {
        latitude: 52.377956,
        longitude: 4.897070
      },
      zoom: 12
    },
    {
      city: City.Hamburg,
      center: {
        latitude: 53.551086,
        longitude: 9.993682
      },
      zoom: 12
    },
    {
      city: City.Dusseldorf,
      center: {
        latitude: 51.233334,
        longitude: 6.783333
      },
      zoom: 12
    }
  ];

export const citiesData = new Map<City, CityData>(citiesArray.map((c) => [c.city, c]));

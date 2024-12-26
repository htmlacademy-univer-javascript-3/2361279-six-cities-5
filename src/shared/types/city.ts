import {Location} from './place.ts';

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export type CityData = {
  name: City;
  center: Location;
};

const citiesArray: CityData[] =
  [
    {
      name: City.Paris,
      center: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 12
      },
    },
    {
      name: City.Cologne,
      center: {
        latitude: 50.935173,
        longitude: 6.953101,
        zoom: 12
      },
    },
    {
      name: City.Brussels,
      center: {
        latitude: 50.85045,
        longitude: 4.34878,
        zoom: 12
      },
    },
    {
      name: City.Amsterdam,
      center: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 12
      },
    },
    {
      name: City.Hamburg,
      center: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      },
    },
    {
      name: City.Dusseldorf,
      center: {
        latitude: 51.233334,
        longitude: 6.783333,
        zoom: 12
      },
    }
  ];

export const citiesData = new Map<City, CityData>(citiesArray.map((c) => [c.name, c]));

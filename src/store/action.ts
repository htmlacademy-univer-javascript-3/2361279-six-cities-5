import * as RTK from '@reduxjs/toolkit';
import {City, citiesData, CityData} from '../shared/types/city.ts';


export const fillOffers = RTK.createAction('FILL_OFFERS');
export const changeCity = RTK.createAction('CHANGE_CITY',
  (newCity: City) => ({
    payload: citiesData.get(newCity) as CityData,
  }));

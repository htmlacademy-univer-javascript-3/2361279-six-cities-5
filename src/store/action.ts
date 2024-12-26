import {createAction} from '@reduxjs/toolkit';
import {City, citiesData, CityData} from '../shared/types/city.ts';
import {Place} from '../shared/types/place.ts';


export const fillOffers = createAction('FILL_OFFERS',
  (offers: Place[]) => ({
    payload: offers
  }));
export const changeCity = createAction('CHANGE_CITY',
  (newCity: City) => ({
    payload: citiesData.get(newCity) as CityData
  }));
export const setOffersLoadingStatus = createAction<boolean>('SET_OFFERS_LOADING_STATUS');

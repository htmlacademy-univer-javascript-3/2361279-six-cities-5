import {createReducer} from '@reduxjs/toolkit';
import {fillOffers, changeCity, setOffersLoadingStatus} from './action.ts';
import {City, CityData, citiesData} from '../shared/types/city.ts';
import {Place} from '../shared/types/place.ts';

export type StoreState = {
  cityData: CityData;
  offers: Place[];
  offersLoadingStatus: boolean;
};

export const reducer = createReducer<StoreState>({
  cityData: citiesData.get(City.Paris) as CityData,
  offers: [],
  offersLoadingStatus: false
},
(builder) => {
  builder
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.cityData = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.offersLoadingStatus = action.payload;
    });
});

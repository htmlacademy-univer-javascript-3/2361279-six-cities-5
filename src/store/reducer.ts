import * as RTK from '@reduxjs/toolkit';
import {fillOffers, changeCity} from './action.ts';
import {City, CityData, citiesData} from '../shared/types/city.ts';
import {mockOfferPlaces} from '../shared/mocks/offer.ts';
import {Place} from '../shared/types/place.ts';

export type StoreState = {
  cityData: CityData;
  offers: Place[];
};

export const reducer = RTK.createReducer<StoreState>({
  cityData: citiesData.get(City.Paris) as CityData,
  offers: mockOfferPlaces.filter((p) => p.city === City.Paris)
},
(builder) => {
  builder
    .addCase(fillOffers, (state) => {
      state.offers = mockOfferPlaces.filter((p) => p.city === state.cityData.city);
    })
    .addCase(changeCity, (state, action) => {
      state.cityData = action.payload;
    });
});

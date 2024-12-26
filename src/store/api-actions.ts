import { createAsyncThunk } from '@reduxjs/toolkit';
import {AppDispatch} from './index.ts';
import {StoreState} from './reducer.ts';
import {AxiosInstance} from 'axios';
import {setOffersLoadingStatus, fillOffers} from './action.ts';
import {Place} from '../shared/types/place.ts';
import {ApiRoute} from '../shared/const/api-routes.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StoreState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<Place[]>(ApiRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(fillOffers(data));
  }
);


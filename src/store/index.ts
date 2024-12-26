import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import {configureAxios} from '../api.ts';

const axios = configureAxios();

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axios
      }
    })
});

export type AppDispatch = typeof store.dispatch;

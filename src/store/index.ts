import * as RTK from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';

export const store = RTK.configureStore({
  reducer: reducer
});

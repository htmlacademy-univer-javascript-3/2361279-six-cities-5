import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app.tsx';
import {Provider} from 'react-redux';
import {store} from './store/index.ts';
import {fetchOffersAction} from './store/api-actions.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App favoritePlaces={[]}/>
    </Provider>
  </React.StrictMode>
);

store.dispatch(fetchOffersAction);

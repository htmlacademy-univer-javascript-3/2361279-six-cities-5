import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app.tsx';
import {mockOfferPlaces} from './shared/mocks/offer.ts';
import {mockFavoritePlaces} from './shared/mocks/favorite.ts';
import {Provider} from 'react-redux';
import {store} from './store/index.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App mainPagePlaces={mockOfferPlaces} favoritePlaces={mockFavoritePlaces}/>
    </Provider>
  </React.StrictMode>
);

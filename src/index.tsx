import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app.tsx';
import {mockOfferPlaces} from './shared/mocks/offer.ts';
import {mockFavoritePlaces} from './shared/mocks/favorite.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App mainPagePlaces={mockOfferPlaces} favoritePlaces={mockFavoritePlaces}/>
  </React.StrictMode>
);

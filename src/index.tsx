import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app.tsx';
import {mockPlaceCards} from './mocks/offer.ts';
import {mockFavoriteCards} from './mocks/favorite.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placeCards={mockPlaceCards} favoriteCards={mockFavoriteCards}/>
  </React.StrictMode>
);

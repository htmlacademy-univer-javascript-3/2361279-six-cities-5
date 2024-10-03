import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app.tsx';

import {PlaceType} from './constants.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesFoundCount={400} placeCards={[
      {
        rating: 4, cardType: PlaceType.apartment,
        description: 'beautiful & luxurious apartment at great location', price: 120,
        imageName: 'apartment-01.jpg'
      },
      {
        rating: 4, cardType: PlaceType.room,
        description: 'wood and stone place', price: 80,
        imageName: 'room.jpg'
      },
      {
        rating: 4, cardType: PlaceType.apartment,
        description: 'canal view prinsengracht', price: 132,
        imageName: 'apartment-02.jpg'
      },
      {
        rating: 5, cardType: PlaceType.apartment,
        description: 'nice, cozy, warm big bed apartment', price: 180,
        imageName: 'apartment-03.jpg'
      },
      {
        rating: 4, cardType: PlaceType.room,
        description: 'wood and stone place', price: 80,
        imageName: 'room.jpg'
      }
    ]}
    />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app.tsx';
import {mockFavoritePlaces} from './shared/mocks/favorite.ts';
import {Provider} from 'react-redux';
import {store} from './store/index.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App favoritePlaces={mockFavoritePlaces}/>
    </Provider>
  </React.StrictMode>
);

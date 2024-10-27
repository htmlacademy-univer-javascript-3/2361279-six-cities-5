import {Main} from './main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Login} from './login.tsx';
import {Favorites} from './favorites.tsx';
import {Offer} from './offer.tsx';
import {NotFound} from './not-found.tsx';
import {Authorized} from './authorized.tsx';
import {Place} from '../shared/types/place.ts';

export type AppProps = {
  favoritePlaces: Place[];
  mainPagePlaces: Place[];
};

export function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main offeredPlaces={props.mainPagePlaces}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/favorites' element={
          <Authorized isAuthorized> <Favorites favoritePlaces={props.favoritePlaces}/>  </Authorized>
        }
        />
        <Route path='/offer/:id' element={<Offer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

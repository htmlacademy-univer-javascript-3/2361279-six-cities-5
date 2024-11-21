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
};

export function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/favorites' element={
          <Authorized isAuthorized={false}>
            <Favorites favoritePlaces={props.favoritePlaces}/>
          </Authorized>
        }
        />
        <Route path='/offer/:id' element={<Offer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

import {Main} from './main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Login} from './login.tsx';
import {Favorites} from './favorites.tsx';
import {Offer} from './offer.tsx';
import {NotFound} from './not_found.tsx';
import {Authorized} from './authorized.tsx';
import {PlaceCardProps} from './place_card.tsx';

export type AppProps = {
  favoriteCards: PlaceCardProps[];
  placeCards: PlaceCardProps[];
};

export function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main placeCards={props.placeCards}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/favorites' element={<Favorites favoriteCards={props.favoriteCards}/>}/>
        <Route path='/offer/:id' element={<Offer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

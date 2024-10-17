import {Main} from './main.tsx';
import {ComponentProps} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Login} from './login.tsx';
import {Favorites} from './favorites.tsx';
import {Offer} from './offer.tsx';
import {NotFound} from './not_found.tsx';
import {Authorized} from './Authorized.tsx';

export function App(props: ComponentProps<typeof Main>) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main {...props}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/favorites' element={<Authorized isAuthorized={false}/>}/>
        <Route index element={<Favorites/>}></Route>
        <Route/>
        <Route path='/offer/:id' element={<Offer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

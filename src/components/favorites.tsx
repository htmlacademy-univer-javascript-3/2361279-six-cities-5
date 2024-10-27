import {FavoritePlacesCardList} from './favorite-places-card-list.tsx';
import {Layout} from './layout.tsx';
import {Place} from '../shared/types/place.ts';
import {Link} from 'react-router-dom';

export type FavoritesProps = {
  favoritePlaces: Place[];
};

export function Favorites(props: FavoritesProps) {
  return (
    <Layout>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritePlacesCardList favoritePlaces={props.favoritePlaces}/>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </Layout>
  );
}

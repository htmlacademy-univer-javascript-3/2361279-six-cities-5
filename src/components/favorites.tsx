import {PlaceCardProps} from './place_card.tsx';
import {FavoriteList} from './favorite_list.tsx';
import {Layout} from './layout.tsx';

export type FavoritesProps = {
  favoriteCards: PlaceCardProps[];
};

export function Favorites(props: FavoritesProps) {
  return (
    <Layout>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoriteList favoriteCards={props.favoriteCards}/>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </Layout>
  );
}

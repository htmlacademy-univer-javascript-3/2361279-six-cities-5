import {PlaceCardProps} from './place_card.tsx';
import {OfferList} from './offer_list.tsx';
import {Layout} from './layout.tsx';

export type MainProps = {
  placeCards: PlaceCardProps[];
};

export function Main(props: MainProps) {
  return (
    <Layout>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">places</h2>
              <b className="places__found">{props.placeCards.length} places to stay in amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                    popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>popular</li>
                  <li className="places__option" tabIndex={0}>price: low to high</li>
                  <li className="places__option" tabIndex={0}>price: high to low</li>
                  <li className="places__option" tabIndex={0}>top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferList placeCards={props.placeCards}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

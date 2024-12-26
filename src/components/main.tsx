import {OfferedPlacesCardList} from './offered-places-card-list.tsx';
import {Layout} from './layout.tsx';
import {Map} from './map.tsx';
import {MapInfo} from './map.tsx';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {StoreState} from '../store/reducer.ts';
import {Place} from '../shared/types/place.ts';
import {CityData} from '../shared/types/city.ts';
import {CityList} from './city-list.tsx';
import {SortingOptions} from './sorting-options.tsx';


export type PlaceComparer = (place1: Place, place2: Place) => number;
export function Main() {
  const offeredPlaces = [...useSelector<StoreState, Place[]>((state) => state.offers)];
  const cityData = useSelector<StoreState, CityData>((state) => state.cityData);
  const [activeCardIndex, setActiveCard] = useState<number | null>(null);

  const mapInfo: MapInfo = {
    points: offeredPlaces,
    options: {
      zoom: cityData.center.zoom,
      center: {lat: cityData.center.latitude, lng: cityData.center.longitude}
    },
    activePointIndex: activeCardIndex
  };
  const [comparer, setComparer] = useState<PlaceComparer>(() => () => 0);
  return (
    <Layout containerClasses={'page--gray page--main'}>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">cities</h1>
        <CityList/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">places</h2>
              <b className="places__found">{offeredPlaces.length} places to stay in amsterdam</b>
              <SortingOptions setComparer={setComparer}/>
              <div className="cities__places-list places__list tabs__content">
                <OfferedPlacesCardList setActiveCard={setActiveCard} classes='cities__card' offeredPlaces={offeredPlaces.sort(comparer)}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map classes='cities__map' mapInfo={mapInfo}/>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

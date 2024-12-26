import {useSelector, useDispatch} from 'react-redux';
import {citiesData, City} from '../shared/types/city.ts';
import {clsx} from 'clsx';
import {StoreState} from '../store/reducer.ts';
import {changeCity, fillOffers} from '../store/action.ts';

const cities = [...citiesData.keys()];
export function CityList() {
  const currentCity = useSelector<StoreState, City>((state) => state.cityData.name);
  const dispatch = useDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <a className={clsx('locations__item-link tabs__item', city === currentCity && 'tabs__item--active')}
                onClick={() => {
                  dispatch(changeCity(city));
                }}
              >
                <span>{city}</span>
              </a>
            </li>))}
        </ul>
      </section>
    </div>
  );
}

import {Main} from './main.tsx';
import {OfferType} from './city_card.tsx';

export function App(props: { places_found: number; offers: OfferType[] }) {
  return <Main {...props}/>;
}

import {Main} from './main.tsx';
import {PlaceCardProps} from './place_card.tsx';

export function App(props: { places_found: number; offers: PlaceCardProps[] }) {
  return <Main {...props}/>;
}

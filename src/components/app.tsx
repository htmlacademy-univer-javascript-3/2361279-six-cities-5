import {Main} from './main.tsx';
import {PlaceCardProps} from './place_card.tsx';

export function App(props: { placesFoundCount: number; placeCards: PlaceCardProps[] }) {
  return <Main {...props}/>;
}

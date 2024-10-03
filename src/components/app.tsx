import {Main} from './main.tsx';
import {ComponentProps} from 'react';

export function App(props: ComponentProps<typeof Main>) {
  return <Main {...props}/>;
}

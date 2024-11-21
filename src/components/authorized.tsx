import {PropsWithChildren} from 'react';
import {Navigate} from 'react-router-dom';

export type AuthorizedProps = {
  isAuthorized: boolean;
} & PropsWithChildren;

export function Authorized(props: AuthorizedProps) {
  return props.isAuthorized ? props.children : <Navigate to='/login'></Navigate>;
}

import {PropsWithChildren} from 'react';
import {Navigate} from 'react-router-dom';

export type AuthorizedProps = {
  isAuthorized: boolean;
} & PropsWithChildren;

export function Authorized(props: AuthorizedProps) {
  return (
    <>
      {props.isAuthorized || <Navigate to='/login'></Navigate>}
      {props.children}
    </>
  );
}

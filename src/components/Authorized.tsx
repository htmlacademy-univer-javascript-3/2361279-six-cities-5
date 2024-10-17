import {Fragment} from 'react';
import {Navigate, Outlet} from 'react-router-dom';

export type AuthorizedProps = {
  isAuthorized: boolean;
};

export function Authorized(props: AuthorizedProps) {
  return (
    <Fragment>
      {props.isAuthorized || <Navigate to='/login'></Navigate>}
      <Outlet/>
    </Fragment>
  );
}

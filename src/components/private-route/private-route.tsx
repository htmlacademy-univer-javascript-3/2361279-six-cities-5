import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useSelector } from 'react-redux';
import { selectAuthorizationStatus } from '../../store/selectors';
import {PropsWithChildren} from 'react';

export default function PrivateRoute({ children }: PropsWithChildren){
  const authorizationStatus = useSelector(selectAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

PrivateRoute.displayName = 'PrivateRoute';

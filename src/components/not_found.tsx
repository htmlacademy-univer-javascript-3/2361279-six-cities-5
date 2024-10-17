import {Link} from 'react-router-dom';
import {Fragment} from 'react';

export function NotFound() {
  return (
    <Fragment>
      <h1>404 Not Found</h1>
      <Link to="/"></Link>
    </Fragment>
  );
}

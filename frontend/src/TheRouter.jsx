import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Loading from './components/Loading';

const routes = [
  {
    path: '/',
    view: 'Home'
  },
  {
    path: '/hboi/:architectuurlaag/:activiteit',
    view: 'Hboi'
  },
  {
    path: '/hboi',
    view: 'Hboi'
  },
  {
    path: '/beheersingsniveaus',
    view: 'Beheersingsniveaus'
  },
  {
    path: '*',
    view: 'PageNotFound'
  }
]

/**
 * Create a lazy-loading route with the standards of code-splitting.
 * @param {string} path The path to that view
 * @param {string} view The view filepath (e.g. ./views/Home.js = home)
 * @param {boolean} exact If the route should be exact
 * @see https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
 */
function route(path, view) {
  const lazyLoader = lazy(() =>
    import(`./views/${view ? view : path.slice(1)}`)
  );
  return <Route key={path} path={path} component={lazyLoader} exact />;
}

export function TheRouter() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>{routes.map(({ path, view }) => route(path, view))}</Switch>
      </Suspense>
    </BrowserRouter>
  );
}

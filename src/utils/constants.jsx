import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/home'));
const NotFoundPage = lazy(() => import('../pages/not-found/not-found'));

export const ROUTES = {
  home: {
    path: '/',
    name: 'HOME',
    content: <HomePage />,
  },
  error: {
    path: '*',
    name: 'ERROR',
    content: <NotFoundPage />,
  },
};

export const ROUTES_HIDE = ['ERROR'];

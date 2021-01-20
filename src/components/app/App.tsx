import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/named
import { store } from '../../redux/store';
import { AppRouter } from '../app-router/AppRouter';

export const App = (): ReactElement => (
  <>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </>
);

import React, { ReactElement } from 'react';
import { MainSearch } from '../components/main-search/MainSearch';
import { MovieTable } from '../components/movie-table/MovieTable';

export const Main = (): ReactElement => (
  <>
    <MainSearch />
    <MovieTable />
  </>
);

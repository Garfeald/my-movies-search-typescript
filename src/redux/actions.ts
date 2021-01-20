import {
  FETCH_MOVIES,
  FETCHED_MOVIES,
  IMovies,
  MOVIE_CHOSEN,
  MOVIE_DETAILS_REQUESTED,
  IMovieDetails,
  MOVIES_REQUESTED,
  MovieSearchingTypes,
  REFRESH_SETTINGS,
  REQUEST_MOVIE_DETAILS,
  SEARCH_MOVIES,
  START_FETCHING,
} from './types';

export const searchMovies = (searchValue: string): MovieSearchingTypes => ({
  type: SEARCH_MOVIES,
  payload: searchValue,
});

export const startFetching = (): MovieSearchingTypes => ({
  type: START_FETCHING,
});

export const fetchMovies = (searchValue: string): MovieSearchingTypes => ({
  type: FETCH_MOVIES,
  payload: searchValue,
});

export const moviesFetched = (fetchedMovies: IMovies[]): MovieSearchingTypes => ({
  type: FETCHED_MOVIES,
  payload: fetchedMovies,
});

export const requestMovies = (): MovieSearchingTypes => ({
  type: 'REQUEST_MOVIES',
});

export const moviesRequested = (movies: IMovies[]): MovieSearchingTypes => ({
  type: MOVIES_REQUESTED,
  payload: movies,
});

export const movieChosen = (id: string): MovieSearchingTypes => ({
  type: MOVIE_CHOSEN,
  payload: id,
});

export const requestMovieDetails = (): MovieSearchingTypes => ({
  type: REQUEST_MOVIE_DETAILS,
});

export const refreshSettings = (): MovieSearchingTypes => ({
  type: REFRESH_SETTINGS,
});

export const movieDetailsRequested = (movieDetails: IMovieDetails): MovieSearchingTypes => ({
  type: MOVIE_DETAILS_REQUESTED,
  payload: movieDetails,
});

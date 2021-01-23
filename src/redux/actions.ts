import {
  FETCH_MOVIES_ASYNC,
  SEARCHED_MOVIES_ASYNC,
  IMovie,
  // MOVIE_CHOSEN,
  FETCHED_MOVIE_DETAILS_ASYNC,
  IMovieDetails,
  FETCHED_MOVIES_ASYNC,
  MovieSearchingTypes,
  REFRESH_SETTINGS,
  FETCH_MOVIE_DETAILS_ASYNC,
  SEARCH_MOVIES_ASYNC,
  START_SEARCHING,
} from './types';

export const searchMoviesAsync = (searchValue: string): MovieSearchingTypes => ({
  type: SEARCH_MOVIES_ASYNC,
  payload: searchValue,
});

export const startSearching = (): MovieSearchingTypes => ({
  type: START_SEARCHING,
});

export const searchedMoviesAsync = (searchedMovies: IMovie[]): MovieSearchingTypes => ({
  type: SEARCHED_MOVIES_ASYNC,
  payload: searchedMovies,
});

export const fetchMoviesAsync = (searchValue: string): MovieSearchingTypes => ({
  type: FETCH_MOVIES_ASYNC,
  payload: searchValue,
});

export const fetchedMoviesAsync = (movies: IMovie[]): MovieSearchingTypes => ({
  type: FETCHED_MOVIES_ASYNC,
  payload: movies,
});

export const fetchMovieDetailsAsync = (id: string): MovieSearchingTypes => ({
  type: FETCH_MOVIE_DETAILS_ASYNC,
  payload: id,
});

export const fetchedMovieDetailsAsync = (movieDetails: IMovieDetails): MovieSearchingTypes => ({
  type: FETCHED_MOVIE_DETAILS_ASYNC,
  payload: movieDetails,
});

export const refreshSettings = (): MovieSearchingTypes => ({
  type: REFRESH_SETTINGS,
});

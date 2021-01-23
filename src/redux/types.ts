export interface IMovie {
  Poster: string;
  Title: string;
  imdbID: string;
  Year: string;
  Type: string;
}

export interface IRatings {
  Source: string;
  Value: string;
}

export interface IMovieDetails {
  Actors: string;
  Awords: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: IRatings[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

export interface IMovieState {
  searchValue: string;
  loading: boolean;
  movies: IMovie[];
  searchedMovies: IMovie[];
  chosenMovie: string;
  movieDetails: IMovieDetails;
}

export const SEARCH_MOVIES_ASYNC = 'SEARCH_MOVIES_ASYNC';
export type SearchMoviesAsync = {
  type: typeof SEARCH_MOVIES_ASYNC;
  payload: string;
};

export const START_SEARCHING = 'START_SEARCHING';
export type StartSearching = {
  type: typeof START_SEARCHING;
};

export const SEARCHED_MOVIES_ASYNC = 'SEARCHED_MOVIES_ASYNC';
export type SearchedMoviesAsync = {
  type: typeof SEARCHED_MOVIES_ASYNC;
  payload: IMovie[];
};

export const FETCH_MOVIES_ASYNC = 'FETCH_MOVIES_ASYNC';
export type FetchMoviesAsync = {
  type: typeof FETCH_MOVIES_ASYNC;
  payload: string;
};

export const FETCHED_MOVIES_ASYNC = 'FETCHED_MOVIES_ASYNC';
export type FetchedMoviesAsync = {
  type: typeof FETCHED_MOVIES_ASYNC;
  payload: IMovie[];
};

export const FETCH_MOVIE_DETAILS_ASYNC = 'FETCH_MOVIE_DETAILS_ASYNC';
export type FetchMovieDetailsAsync = {
  type: typeof FETCH_MOVIE_DETAILS_ASYNC;
  payload: string;
};

export const FETCHED_MOVIE_DETAILS_ASYNC = 'FETCHED_MOVIE_DETAILS_ASYNC';
export type FetchedMovieDetailsAsync = {
  type: typeof FETCHED_MOVIE_DETAILS_ASYNC;
  payload: IMovieDetails;
};

export const REFRESH_SETTINGS = 'REFRESH_SETTINGS';
export type RefreshSettings = {
  type: typeof REFRESH_SETTINGS;
};

export type MovieSearchingTypes =
  | SearchMoviesAsync
  | StartSearching
  | FetchMoviesAsync
  | SearchedMoviesAsync
  | FetchedMoviesAsync
  | RefreshSettings
  | FetchMovieDetailsAsync
  | FetchedMovieDetailsAsync;

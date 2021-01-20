export type IMovies = {
  Poster: string;
  Title: string;
  imdbID: string;
  Year: string;
  Type: string;
};

export type IMovieDetails = {
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
  Ratings: [];
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
};

export interface MovieInitialState {
  searchValue: string;
  loading: boolean;
  movies: IMovies[];
  fetchedMovies: IMovies[];
  chosenMovie: string;
  movieDetails: IMovieDetails;
}

export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export type SearchMovies = {
  type: typeof SEARCH_MOVIES;
  payload: string;
};

export const START_FETCHING = 'START_FETCHING';
export type StartFetchingAsync = {
  type: typeof START_FETCHING;
};

export const FETCH_MOVIES = 'FETCH_MOVIES';
export type FetchMoviesAsync = {
  type: typeof FETCH_MOVIES;
  payload: string;
};

export const FETCHED_MOVIES = 'FETCHED_MOVIES';
export type FetchedMoviesAsync = {
  type: typeof FETCHED_MOVIES;
  payload: IMovies[];
};

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export type RequestMovies = {
  type: typeof REQUEST_MOVIES;
};

export const MOVIES_REQUESTED = 'MOVIES_REQUESTED';
export type MovieRequestedAsync = {
  type: typeof MOVIES_REQUESTED;
  payload: IMovies[];
};

export const MOVIE_CHOSEN = 'MOVIE_CHOSEN';
export type MovieChosenAsync = {
  type: typeof MOVIE_CHOSEN;
  payload: string;
};

export const REQUEST_MOVIE_DETAILS = 'REQUEST_MOVIE_DETAILS';
export type RequestMovieDetails = {
  type: typeof REQUEST_MOVIE_DETAILS;
};

export const REFRESH_SETTINGS = 'REFRESH_SETTINGS';
export type RefreshSettings = {
  type: typeof REFRESH_SETTINGS;
};

export const MOVIE_DETAILS_REQUESTED = 'MOVIE_DETAILS_REQUESTED';
export type MovieDetailsRequestedAsync = {
  type: typeof MOVIE_DETAILS_REQUESTED;
  payload: IMovieDetails;
};

export type MovieSearchingTypes =
  | SearchMovies
  | StartFetchingAsync
  | FetchMoviesAsync
  | FetchedMoviesAsync
  | RequestMovies
  | MovieRequestedAsync
  | RequestMovieDetails
  | RefreshSettings
  | MovieDetailsRequestedAsync
  | MovieChosenAsync;

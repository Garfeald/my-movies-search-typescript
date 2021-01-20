import { IMovieDetails, MovieInitialState, MovieSearchingTypes } from './types';

export const getMovieDetailsState = (): IMovieDetails => ({
  Actors: '',
  Awords: '',
  BoxOffice: '',
  Country: '',
  DVD: '',
  Director: '',
  Genre: '',
  Language: '',
  Metascore: '',
  Plot: '',
  Poster: '',
  Production: '',
  Rated: '',
  Ratings: [],
  Released: '',
  Response: '',
  Runtime: '',
  Title: '',
  Type: '',
  Website: '',
  Writer: '',
  Year: '',
  imdbID: '',
  imdbRating: '',
  imdbVotes: '',
});

export const getInitialState = (): MovieInitialState => ({
  searchValue: '',
  loading: false,
  movies: [],
  fetchedMovies: [],
  chosenMovie: '',
  movieDetails: {
    ...getMovieDetailsState(),
  },
});

export const moviesReducer = (
  state: MovieInitialState = getInitialState(),
  action: MovieSearchingTypes
): MovieInitialState => {
  switch (action.type) {
    case 'START_FETCHING':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_MOVIES':
      return {
        ...state,
        searchValue: action.payload,
      };
    case 'FETCHED_MOVIES':
      return {
        ...state,
        loading: false,
        fetchedMovies: action.payload,
      };
    case 'SEARCH_MOVIES':
      return {
        ...state,
        searchValue: action.payload,
      };
    case 'REQUEST_MOVIES':
      return {
        ...state,
        loading: true,
      };
    case 'MOVIES_REQUESTED':
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case 'MOVIE_CHOSEN':
      return {
        ...state,
        chosenMovie: action.payload,
      };
    case 'REQUEST_MOVIE_DETAILS':
      return {
        ...state,
        loading: true,
      };
    case 'REFRESH_SETTINGS':
      return {
        searchValue: '',
        loading: false,
        movies: [],
        fetchedMovies: [],
        chosenMovie: '',
        movieDetails: {
          ...getMovieDetailsState(),
        },
      };
    case 'MOVIE_DETAILS_REQUESTED':
      return {
        ...state,
        loading: false,
        movieDetails: action.payload,
      };
    default:
      return state;
  }
};

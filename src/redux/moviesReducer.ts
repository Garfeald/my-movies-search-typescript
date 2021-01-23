import { IMovieDetails, IMovieState, MovieSearchingTypes } from './types';

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

export const getInitialState = (): IMovieState => ({
  searchValue: '',
  loading: false,
  movies: [],
  searchedMovies: [],
  chosenMovie: '',
  movieDetails: {
    ...getMovieDetailsState(),
  },
});

export const moviesReducer = (
  state: IMovieState = getInitialState(),
  action: MovieSearchingTypes
): IMovieState => {
  switch (action.type) {
    case 'START_SEARCHING':
      return {
        ...state,
        loading: true,
      };
    case 'SEARCH_MOVIES_ASYNC':
      return {
        ...state,
        searchValue: action.payload,
      };
    case 'SEARCHED_MOVIES_ASYNC':
      return {
        ...state,
        loading: false,
        searchedMovies: action.payload,
      };
    case 'FETCH_MOVIES_ASYNC':
      return {
        ...state,
        searchValue: action.payload,
      };
    case 'FETCHED_MOVIES_ASYNC':
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case 'FETCH_MOVIE_DETAILS_ASYNC':
      return {
        ...state,
        chosenMovie: action.payload,
      };
    case 'FETCHED_MOVIE_DETAILS_ASYNC':
      return {
        ...state,
        loading: false,
        movieDetails: action.payload,
      };
    case 'REFRESH_SETTINGS':
      return {
        searchValue: '',
        loading: false,
        movies: [],
        searchedMovies: [],
        chosenMovie: '',
        movieDetails: {
          ...getMovieDetailsState(),
        },
      };
    default:
      return state;
  }
};

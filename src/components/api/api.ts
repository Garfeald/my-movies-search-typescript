import { IMovieDetails, IMovie } from '../../redux/types';

const axios = require('axios');

export const api = {
  fetch: {
    fetchMovies: (payload: string): Promise<IMovie> =>
      axios.get(`http://www.omdbapi.com/?s=${payload}&apikey=${process.env.API_KEY}&`),
    fetchMovieDetails: (payload: string): Promise<IMovieDetails> =>
      axios.get(`http://www.omdbapi.com/?i=${payload}&apikey=${process.env.API_KEY}&`),
  },
};

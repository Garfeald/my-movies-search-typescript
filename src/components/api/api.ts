import { IMovieDetails, IMovies } from '../../redux/types';

const axios = require('axios');

export const api = {
  fetch: {
    fetchMovies: (searchValue: string): Promise<IMovies> =>
      axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.API_KEY}&`),
    fetchMovieDetails: (id: string): Promise<IMovieDetails> =>
      axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.API_KEY}&`),
  },
};

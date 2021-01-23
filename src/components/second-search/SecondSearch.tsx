import React, { useState, useEffect, ChangeEvent, ReactElement, FC } from 'react';
import { TextField, CircularProgress, makeStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { searchMoviesAsync, fetchMovieDetailsAsync } from '../../redux/actions';
import { AppState } from '../../redux/rootReducer';
import { IMovie, IMovieState } from '../../redux/types';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    margin: '60px auto',
    backgroundColor: '#F0FFFF',
  },
}));

export const SecondSearch: FC = (): ReactElement => {
  const [inputValue, setInputValue] = useState('');
  const { searchedMovies } = useSelector<AppState, IMovieState>((state: AppState) => state.movies);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const selectMovie = (event: ChangeEvent<{}>, value: IMovie) => {
    if (value.imdbID) {
      dispatch(fetchMovieDetailsAsync(value.imdbID));
      history.push(`/movies/${value.imdbID}`);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (inputValue) {
      dispatch(searchMoviesAsync(inputValue));
    }
    setLoading(false);
  }, [inputValue, setInputValue]);
  return (
    <div className={classes.root}>
      <Autocomplete
        onChange={(event, value) => selectMovie(event, value as IMovie)}
        freeSolo
        filterOptions={(option) => option}
        getOptionLabel={(option) => option.Title}
        options={searchedMovies || []}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            value={inputValue}
            onChange={onChange}
            label="Поиск фильмов"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={5} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

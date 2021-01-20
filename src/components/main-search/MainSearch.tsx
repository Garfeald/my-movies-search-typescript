import React, {
  BaseSyntheticEvent,
  ChangeEvent,
  FC,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { TextField, CircularProgress, makeStyles, AppBar, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router';
import { searchMovies, fetchMovies } from '../../redux/actions';
import { MovieInitialState } from '../../redux/types';
import { AppState } from '../../redux/rootReducer';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginTop: '90px',
    backgroundColor: '#F0FFFF',
  },
  title: {
    flexGrow: 1,
    height: 50,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 32,
    fontFamily: 'URW Chancery L, cursive',
  },
}));

export const MainSearch: FC = (): ReactElement => {
  const [inputValue, setInputValue] = useState('');
  const { fetchedMovies } = useSelector<AppState, MovieInitialState>(
    (state: AppState) => state.movies
  );
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onChangeField = (e: BaseSyntheticEvent) => {
    const { id } = e.currentTarget.dataset;
    dispatch(searchMovies(inputValue));
    history.push(`/movies/:${id}`);
  };

  useEffect(() => {
    setLoading(true);
    if (inputValue) {
      dispatch(fetchMovies(inputValue));
    }
    setLoading(false);
  }, [inputValue]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar>
        <Typography variant="h6" className={classes.title}>
          myMovieSearch
        </Typography>
      </AppBar>
      <Autocomplete
        onChange={onChangeField}
        freeSolo
        filterOptions={(options) => options}
        getOptionLabel={(options) => options.Title}
        options={fetchedMovies || []}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={onChange}
            value={inputValue}
            label="Поиск фильмов"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={10} /> : null}
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

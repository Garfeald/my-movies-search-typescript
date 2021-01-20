import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Table, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Movie } from '../movie/Movie';
import { IMovies, MovieInitialState } from '../../redux/types';
import { AppState } from '../../redux/rootReducer';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    margin: '0 auto',
  },
  spinner: {
    width: '250px',
    margin: '50px auto',
  },
}));

export const MovieTable: FC = (): ReactElement => {
  const classes = useStyles();
  const { loading } = useSelector<AppState, MovieInitialState>((state: AppState) => state.movies);
  const { movies } = useSelector<AppState, MovieInitialState>((state: AppState) => state.movies);
  return (
    <>
      <div className={classes.root}>
        {loading ? (
          <div className={classes.spinner}>
            <CircularProgress size="10rem" />
          </div>
        ) : (
          <Table>
            {movies && (
              <TableBody>
                {movies.map((movie: IMovies) => (
                  <Movie key={movie.imdbID} {...movie} />
                ))}
              </TableBody>
            )}
          </Table>
        )}
      </div>
    </>
  );
};

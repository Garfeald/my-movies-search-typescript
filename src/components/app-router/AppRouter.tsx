import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Details, Main } from '../../pages';
import { IMovieState } from '../../redux/types';
import { AppState } from '../../redux/rootReducer';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    minHeight: '150vh',
  },
}));

export const AppRouter: FC = (): ReactElement => {
  const classes = useStyles();
  const { chosenMovie } = useSelector<AppState, IMovieState>((state: AppState) => state.movies);
  return (
    <Router>
      <div className={classes.root}>
        <Container>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path={`/movies/:${chosenMovie}`} component={Details} />
            <Redirect from="*" to="/" />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

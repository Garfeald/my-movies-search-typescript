import React, { FC, ReactElement } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import { MovieInitialState } from '../../redux/types';

const useStyles = makeStyles(() => ({
  spinner: {
    margin: '50px auto',
    width: '200px',
  },
  cardContainer: {
    display: 'flex',
    maxWidth: '1500px',
    margin: '50px auto',
    backgroundColor: '#F0FFFF',
  },
  cardContent: {
    marginTop: 20,
    maxHeight: '500px',
  },
  typography: {
    wordBreak: 'break-word',
  },
  cardMedia: {
    width: '100%',
    height: '500px',
    marginTop: 20,
    borderRadius: '7px',
    backgroundSize: 'auto',
  },
}));

export const MovieDetails: FC = (): ReactElement => {
  const { loading, movieDetails } = useSelector<AppState, MovieInitialState>(
    (state: AppState) => state.movies
  );
  const classes = useStyles();
  return (
    <div>
      <hr style={{ color: '#F0FFFF' }} />
      {loading ? (
        <div className={classes.spinner}>
          <CircularProgress size="5px" />
        </div>
      ) : (
        <Card className={classes.cardContainer} variant="outlined">
          <Grid item lg={6} md={6} xs={12}>
            <CardMedia
              className={classes.cardMedia}
              // @ts-ignore
              image={movieDetails.Poster || null}
              // @ts-ignore
              title={movieDetails.Title || null}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <CardContent className={classes.cardContent}>
              {Object.entries(movieDetails).map(([key, value]) => (
                <>
                  <Typography
                    className={classes.typography}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {key !== 'Poster' && key !== 'Response' ? `${key}: ${value}` : null}
                  </Typography>
                </>
              ))}
            </CardContent>
          </Grid>
        </Card>
      )}
    </div>
  );
};

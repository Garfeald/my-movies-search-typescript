import { takeEvery, put, call, select, all } from 'redux-saga/effects';
import {
  requestMovies,
  moviesRequested,
  requestMovieDetails,
  movieDetailsRequested,
  moviesFetched,
  startFetching,
} from './actions';
import { api } from '../components/api/api';
import { AppState } from './rootReducer';

function* fetchMovieWorker() {
  yield put(startFetching());
  const searchValue = yield select(getSearchValue);
  try {
    const res = yield call(api.fetch.fetchMovies, searchValue);
    if (res.data.Search) {
      yield put(moviesFetched(res.data.Search));
    }
  } catch (e) {
    yield put({ type: 'REQUEST_FAILED', payload: e.toString() });
  }
}

function* fetchMovieWatcher() {
  yield takeEvery('FETCH_MOVIES', fetchMovieWorker);
}

function* movieWorker() {
  yield put(requestMovies());
  const searchValue = yield select(getSearchValue);
  try {
    const res = yield call(api.fetch.fetchMovies, searchValue);
    if (res.data.Search) {
      yield put(moviesRequested(res.data.Search));
    }
  } catch (e) {
    yield put({ type: 'REQUEST_FAILED', payload: e.toString() });
  }
}

function* movieWatcher() {
  yield takeEvery('SEARCH_MOVIES', movieWorker);
}

function* movieDetailsWorker() {
  yield put(requestMovieDetails());
  const chosenMovie = yield select(getId);
  try {
    const res = yield call(api.fetch.fetchMovieDetails, chosenMovie);
    if (res.data) {
      yield put(movieDetailsRequested(res.data));
    }
  } catch (e) {
    yield put({ type: 'REQUEST_FAILED', payload: e.toString() });
  }
}

function* movieDetailsWatcher() {
  yield takeEvery('MOVIE_CHOSEN', movieDetailsWorker);
}

export function* rootSaga(): Generator {
  yield all([movieWatcher(), movieDetailsWatcher(), fetchMovieWatcher()]);
}

const getSearchValue = (state: AppState) => state.movies.searchValue;

const getId = (state: AppState) => state.movies.chosenMovie;

import { takeEvery, put, call, all } from 'redux-saga/effects';
import {
  fetchedMoviesAsync,
  fetchedMovieDetailsAsync,
  searchedMoviesAsync,
  startSearching,
} from './actions';
import { api } from '../components/api/api';
import { FetchMoviesAsync, FetchMovieDetailsAsync, SearchMoviesAsync } from './types';

function* searchMovieWorker(action: SearchMoviesAsync) {
  const { payload } = action;
  yield put(startSearching());
  try {
    const res = yield call(api.fetch.fetchMovies, payload);
    if (res.data.Search) {
      yield put(searchedMoviesAsync(res.data.Search));
    }
  } catch (e) {
    yield put({ type: 'REQUEST_FAILED', payload: e.toString() });
  }
}

function* searchMovieWatcher() {
  yield takeEvery('SEARCH_MOVIES_ASYNC', searchMovieWorker);
}

function* fetchMovieWorker(action: FetchMoviesAsync) {
  const { payload } = action;
  try {
    const res = yield call(api.fetch.fetchMovies, payload);
    if (res.data.Search) {
      yield put(fetchedMoviesAsync(res.data.Search));
    }
  } catch (e) {
    yield put({ type: 'REQUEST_FAILED', payload: e.toString() });
  }
}

function* fetchMovieWatcher() {
  yield takeEvery('FETCH_MOVIES_ASYNC', fetchMovieWorker);
}

function* movieDetailsWorker(action: FetchMovieDetailsAsync) {
  const { payload } = action;
  try {
    const res = yield call(api.fetch.fetchMovieDetails, payload);
    if (res.data) {
      yield put(fetchedMovieDetailsAsync(res.data));
    }
  } catch (e) {
    yield put({ type: 'REQUEST_FAILED', payload: e.toString() });
  }
}

function* movieDetailsWatcher() {
  yield takeEvery('FETCH_MOVIE_DETAILS_ASYNC', movieDetailsWorker);
}

export function* rootSaga(): Generator {
  yield all([searchMovieWatcher(), fetchMovieWatcher(), movieDetailsWatcher()]);
}

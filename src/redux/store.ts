import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { rootReducer } from './rootReducer';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware, logger);
const composedEnhancers = compose(middlewareEnhancer);

export const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

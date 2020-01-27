import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers/rootReducer';
import * as sagas from '../sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();
const sagaConnect = () => Object.values(sagas).forEach(saga => sagaMiddleware.run(saga));

const composeEnhancers = (typeof window === 'object')
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = composeEnhancers(
    applyMiddleware(
        thunk,
        logger,
        sagaMiddleware
    )
);

const createStoreWithMiddleware = middleware(createStore);

const store = createStoreWithMiddleware(reducers);

sagaConnect();

export default store;
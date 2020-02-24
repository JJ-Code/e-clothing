import { createStore, applyMiddleware } from 'redux';
import {
    persistStore
} from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

//only works in dev and not production
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// presist allows to cache the store in local browser 
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
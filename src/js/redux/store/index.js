import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import * as reducers from '../reducers';

const rootReducer = combineReducers(reducers);

export function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));
    return store;
}

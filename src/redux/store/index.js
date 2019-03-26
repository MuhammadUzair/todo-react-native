import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from '../epics';
import rootReducer from '../reducers';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers(applyMiddleware(epicMiddleware));

const store = createStore(rootReducer, middlewares);

epicMiddleware.run(rootEpic);

export default store;

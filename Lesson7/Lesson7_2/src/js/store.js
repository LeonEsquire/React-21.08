import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = applyMiddleware(promise, thunk, createLogger());

export default createStore(reducer, middleware);

/* store.state

{
  tweets: {
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
  },
  user: {
    user: {
      id: null,
      name: null,
      age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }
}

*/
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from 'axios';

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PENDING":
      return { ...state, fetching: true };
    case "FETCH_FULFILLED":
      return { ...state, fetching: false, fetched: true, users: action.payload };
    case "FETCH_REJECTED":
      return { ...state, fetching: false, error: action.payload }
  }

  return state;
}

const middleware = applyMiddleware(promise, thunk, createLogger());
const store = createStore(reducer, middleware);


store.dispatch({
  type: "FETCH",
  payload: axios.get('http://jsonpl123aceholder.typicode.com/users').then(response => response.data)
})